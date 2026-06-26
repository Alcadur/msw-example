const MSW_ENABLED_STORAGE_KEY = 'msw_enabled';

export async function initMsw() {
    const { worker } = await import('./browsers');

    await worker.start({ onUnhandledRequest: 'bypass' });
}
