document
    .addEventListener("DOMContentLoaded", () => {
        browser.browserAction
            .setPopupStyles({
                backgroundColor: "#ffffff80",
                borderRadius: "1rem",
            });
        browser.browserAction.resizePopup(450, 710);
        browser.browserAction.detachPopup();
        browser.browserAction.openPopup();
    });