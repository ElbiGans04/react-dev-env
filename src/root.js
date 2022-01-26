if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const runtime = require('react-refresh/runtime');
    runtime.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => type => type;
}