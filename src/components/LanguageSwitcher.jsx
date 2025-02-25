'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTransition, useEffect, useRef } from 'react';

// Define i18n config directly to avoid import issues
const i18nConfig = {
    defaultLocale: 'hr',
    locales: ['hr', 'en', 'de', 'es', 'fr'],
    // Map locales to country codes for flags
    flagMap: {
        'hr': 'hr', // Croatia
        'en': 'gb', // Great Britain for English
        'de': 'de', // Germany
        'es': 'es',
        'fr': 'fr',
    },
    // Names of languages in their own language
    languageNames: {
        'hr': 'Hrvatski',
        'en': 'English',
        'de': 'Deutsch',
        'es': 'Espanol',
        'fr': 'Française',
    }
};

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const selectRef = useRef(null);

    const handleChange = (e) => {
        const newLocale = e.target.value;

        // Get the current pathname without the locale prefix
        const currentPathname = pathname;
        const segments = currentPathname.split('/');
        const isCurrentLocaleInPath = i18nConfig.locales.includes(segments[1]);
        const pathWithoutLocale = isCurrentLocaleInPath
            ? '/' + segments.slice(2).join('/')
            : currentPathname;

        // Construct the new path with the new locale
        const newPath = `/${newLocale}${pathWithoutLocale}`;

        startTransition(() => {
            router.push(newPath);
        });
    };

    // Determine current language from URL
    const getCurrentLanguage = () => {
        const segments = pathname.split('/');
        return i18nConfig.locales.includes(segments[1]) ? segments[1] : i18nConfig.defaultLocale;
    };

    // Add the flag to the select element when it's rendered
    useEffect(() => {
        if (selectRef.current) {
            const currentLocale = getCurrentLanguage();
            const currentFlag = i18nConfig.flagMap[currentLocale];

            // Create and set the background image for the select
            selectRef.current.style.backgroundImage = `url(https://flagcdn.com/w20/${currentFlag}.png), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`;
            selectRef.current.style.backgroundPosition = "10px center, right 0.5rem center";
            selectRef.current.style.backgroundRepeat = "no-repeat, no-repeat";
            selectRef.current.style.backgroundSize = "16px auto, 16px 12px";
            selectRef.current.style.paddingLeft = "32px";
        }
    }, [pathname]);

    return (
        <div className="relative inline-block">
            <select
                ref={selectRef}
                onChange={handleChange}
                value={getCurrentLanguage()}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isPending}
                style={{
                    // These styles will be overridden by the useEffect
                    paddingLeft: "32px",
                }}
            >
                {i18nConfig.locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {i18nConfig.languageNames[locale]}
                    </option>
                ))}
            </select>
        </div>
    );
}