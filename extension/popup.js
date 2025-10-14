const CLIENT_TOOLS = {
    // Note: To use this example, the client tool called "redirectToExternalURL" (case-sensitive) must have been created with the configuration defined above.
    redirectToURL({ url }) {
        console.debug('redirecting to: ', url);

        browser.webfuseSession.relocate(url);
        //window.open(url, '_blank', 'noopener,noreferrer');
    },

    async takeDomSnapshot() {
        return browser.webfuseSession
            .automation
            .take_dom_snapshot({
                modifier: 'downsample',
            });
    },

    async leftClick(selector) {
        return browser.webfuseSession
            .automation
            .left_click(selector);
    },

    async mouseMove(x, y) {
        return browser.webfuseSession
            .automation
            .mouse_move([x, y]);
    },

    async type(text, selector) {
        return browser.webfuseSession
            .automation
            .type(text, selector);
    }
};


function init() {
    const widget = document.querySelector('elevenlabs-convai');

    // Listen for the widget's 'call' event to trigger client-side tools
    widget
        ?.addEventListener('elevenlabs-convai:call', (event) => {
            event.detail.config.clientTools = CLIENT_TOOLS;
        });
}


document.addEventListener('DOMContentLoaded', init);