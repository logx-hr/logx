'use client';

import React, { useEffect, useState } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { usePathname } from "next/navigation";
import Loading from "~/components/Section/Common/Loading/Loading";

// Define the i18n config directly in this file to avoid import issues
const i18nConfig = {
    defaultLocale: 'hr',
    locales: ['hr', 'en', 'de'],
    defaultMessages: {
        // Define some default messages to prevent the "No messages were configured" error
        navigation: {
            home: "Početna",
            about: "O nama",
            contact: "Kontakt"
        },
        homepage: {
            title: "Dobrodošli",
            description: "Ovo je višejezična web stranica"
        }
    }
};

export default function ClientProvider({ locale, children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState(i18nConfig.defaultMessages);
    const pathname = usePathname();

    useEffect(() => {
        const loadMessages = async () => {
            try {
                // First try to load from the project root
                let messages;
                try {
                    messages = await import(`/messages/${locale}.json`);
                } catch (error) {
                    console.log("Couldn't load from root, trying alternate paths...");

                    // Try relative path from src
                    try {
                        messages = await import(`../../../messages/${locale}.json`);
                    } catch (error) {
                        // Try from public directory
                        try {
                            messages = await import(`/src/messages/${locale}.json`);
                        } catch (error) {
                            // Try from src directory
                            messages = await import(`/src/messages/${locale}.json`);
                        }
                    }
                }

                setMessages({...i18nConfig.defaultMessages, ...messages.default});
                console.log("Successfully loaded messages for locale:", locale);
            } catch (error) {
                console.error(`Failed to load messages for locale: ${locale}`, error);
                // Fallback to default locale if messages for the current locale can't be loaded
                if (locale !== i18nConfig.defaultLocale) {
                    try {
                        const defaultMessages = await import(`/messages/${i18nConfig.defaultLocale}.json`);
                        setMessages({...i18nConfig.defaultMessages, ...defaultMessages.default});
                    } catch (fallbackError) {
                        console.error(`Failed to load fallback messages`, fallbackError);
                        // Use default messages object if all else fails
                    }
                }
            }
        };

        loadMessages();
    }, [locale]);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200); // Adjust the loading duration as needed

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Europe/Zagreb" // Add timeZone to fix the warning
            now={new Date()} // Add now to ensure consistent date formatting
        >
            <Loading isLoading={isLoading} />
            {!isLoading && children}
        </NextIntlClientProvider>
    );
}