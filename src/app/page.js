import { redirect } from 'next/navigation';

// This is a simple page at the root that redirects to the default locale
export default function RootPage() {
    // Use a client-side redirect approach to avoid issues with static generation
    if (typeof window !== 'undefined') {
        window.location.href = '/hr';
        return null;
    }

    // Server-side redirect (will work during SSR)
    redirect('/hr');

    // This won't be rendered, but is needed to make the component valid
    return null;
}