export async function initMsw() {
    const { worker } = await import('./browsers');

    await worker.start({ onUnhandledRequest: 'bypass' });
}
