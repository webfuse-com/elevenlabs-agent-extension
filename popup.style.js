browser.browserAction
    .setPopupStyles({
        backgroundColor: "transparent"
    });
browser.browserAction.resizePopup(450, 730);
browser.browserAction.detachPopup();
browser.browserAction.openPopup();