import { createTransport } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Debug: Log the raw request
        console.log('API route called');

        const body = await request.json();
        console.log('Received data:', body);

        const { name, email, number, company, message } = body;

        // Validation
        if (!name || !email || !message) {
            console.log('Validation failed:', { name: !!name, email: !!email, message: !!message });
            return NextResponse.json(
                { success: false, message: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check environment variables
        console.log('Environment variables check:', {
            EMAIL_USER: !!process.env.EMAIL_USER,
            EMAIL_PASS: !!process.env.EMAIL_PASS,
            RECIPIENT_EMAIL: !!process.env.RECIPIENT_EMAIL,
            EMAIL_USER_VALUE: process.env.EMAIL_USER, // Show actual value for debugging
        });

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
            console.error('Missing environment variables');
            return NextResponse.json(
                { success: false, message: 'Server configuration error: Missing email credentials' },
                { status: 500 }
            );
        }

        // Create transporter
        console.log('Creating email transporter...');
        const transporter = createTransport({
            service: 'gmail', // or your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use app password for Gmail
            },
        });

        // Test the connection
        console.log('Testing email connection...');
        try {
            await transporter.verify();
            console.log('Email connection verified successfully');
        } catch (verifyError) {
            console.error('Email connection failed:', verifyError);
            return NextResponse.json(
                { success: false, message: 'Email server connection failed: ' + verifyError.message },
                { status: 500 }
            );
        }

        // Email content
        const emailSubject = `New Contact Form Submission from ${name}`;
        const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Details:</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #212529;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #495057;">Email:</td>
              <td style="padding: 8px 0; color: #212529;">${email}</td>
            </tr>
            ${number ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #495057;">Phone:</td>
              <td style="padding: 8px 0; color: #212529;">${number}</td>
            </tr>
            ` : ''}
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #495057;">Company:</td>
              <td style="padding: 8px 0; color: #212529;">${company}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
          <h3 style="color: #495057; margin-top: 0;">Message:</h3>
          <p style="color: #212529; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
          <small style="color: #6c757d;">
            <strong>Submitted on:</strong> ${new Date().toLocaleString('hr-HR', {
            timeZone: 'Europe/Zagreb',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })}<br>
            <strong>From IP:</strong> ${request.headers.get('x-forwarded-for') || 'Unknown'}
          </small>
        </div>
      </div>
    `;

        // Send email
        console.log('Attempting to send email...');
        console.log('Email details:', {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: emailSubject
        });

        const emailResult = await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender
            to: process.env.RECIPIENT_EMAIL, // Recipient
            replyTo: email, // Reply to the form submitter
            subject: emailSubject,
            html: emailBody,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${number ? `Phone: ${number}` : ''}
        ${company ? `Company: ${company}` : ''}
        
        Message:
        ${message}
        
        Submitted on: ${new Date().toLocaleString('hr-HR', { timeZone: 'Europe/Zagreb' })}
      `
        });

        console.log('Email sent successfully:', emailResult.messageId);

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}