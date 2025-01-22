const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function practice4() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https:jahidul-jihad.netlify.app");

        // For run script and get element by query selector
        await driver.sleep(2000);
        await driver.executeScript(
            `document.querySelector('img[src="https://i.ibb.co.com/Kmy3kjy/image.png"]').scrollIntoView()`
        );

        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
})();
