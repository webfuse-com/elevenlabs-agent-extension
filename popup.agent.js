const CLIENT_TOOLS = {
    async take_dom_snapshot() {
        const fullSnapshot = await browser.webfuseSession
            .automation
            .take_dom_snapshot();

        return ((fullSnapshot.length / 4) < 2**15)
            ? fullSnapshot
            : browser.webfuseSession
                .automation
                .take_dom_snapshot({
                    modifier: "downsample"
                });
    },

    async left_click({ selector }) {
        return browser.webfuseSession
            .automation
            .left_click(selector, true);
    },

    async type({ text, selector }) {
        return browser.webfuseSession
            .automation
            .type(text, selector, true);
    },

    relocate({ url }) {
        browser.webfuseSession.relocate(url);
    }
};


function init() {
    const el = document.createElement("elevenlabs-convai");
    el.setAttribute("agent-id", browser.webfuseSession.env.AGENT_KEY);
    document.body.appendChild(el);

    el.addEventListener("elevenlabs-convai:call", (event) => {
        event.detail.config.clientTools = CLIENT_TOOLS;
    });
}


document.addEventListener("DOMContentLoaded", init);