import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['hr', 'en', 'de', 'es', 'fr'],

    // Used when no locale matches
    defaultLocale: 'hr'
});

export const config = {
    // Match all pathnames except for
    // - API routes
    // - Static files
    // - _next files
    // - Root path (handled by src/app/page.js)
    matcher: ['/((?!api|_next|.*\\.|$).*)']
};