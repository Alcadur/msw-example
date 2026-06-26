'use client'

import { useEffect, useState } from "react";

const isDev = process.env.NODE_ENV === 'development';

export function MswProvider({ children }: { children: React.ReactNode }) {
    const [mswReady, setMswReady] = useState(!isDev);

    useEffect(() => {
        if (!isDev) return;

        let isMounted = true;

        import('./').then(async ({ initMsw }) => {
            await initMsw();

            if (isMounted) {
                setMswReady(true);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    if (!mswReady) {
        return null;
    }

    return <>{children}</>;
}
