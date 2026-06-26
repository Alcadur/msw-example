const MSW_ENABLED_STORAGE_KEY = 'msw_enabled';

export async function initMsw() {
    const { worker } = await import('./browsers');

    if (localStorage.getItem(MSW_ENABLED_STORAGE_KEY)) {
        await worker.start({ onUnhandledRequest: 'bypass' });
    }

    // @ts-expect-error extend global window object
    window.stopMSW = () => {
        localStorage.removeItem(MSW_ENABLED_STORAGE_KEY);
        worker.stop();
        console.log('🔴 MSW');
    };

    // @ts-expect-error extend global window object
    window.startMSW = () => {
        localStorage.setItem(MSW_ENABLED_STORAGE_KEY, 'on');
        worker.start({ onUnhandledRequest: 'bypass' });
        console.log('🟢 MSW');
    };
}
