browser.browserAction
    .setPopupStyles({
        backgroundColor: "transparent"
    });
browser.browserAction.resizePopup(450, 730);
browser.browserAction.detachPopup();
browser.browserAction.openPopup();


const CLIENT_TOOLS = {
    async take_dom_snapshot() {
        return browser.webfuseSession
            .automation
            .take_dom_snapshot({
                modifier: "downsample",
            });
    },

    async left_click({ selector }) {
        return browser.webfuseSession
            .automation
            .left_click(selector);
    },

    async type({ text, selector }) {
        return browser.webfuseSession
            .automation
            .type(text, selector);
    },

    relocate({ url }) {
        browser.webfuseSession.relocate(url);
    }
};


function init() {
    const widget = document.querySelector("elevenlabs-convai");

    // Listen for the widget"s "call" event to trigger client-side tools
    widget
        ?.addEventListener("elevenlabs-convai:call", (event) => {
            event.detail.config.clientTools = CLIENT_TOOLS;
        });
}


document.addEventListener("DOMContentLoaded", init);