const { Builder, By, Key, until } = require("selenium-webdriver");

(async function practice5() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://jahidul-jihad.netlify.app");

        await driver.sleep(3000);
        const element = await driver.executeScript(`return document.querySelector('a[href="https://eco-adventure-experience-3aa69.web.app/"]')`);
        await driver.sleep(3000);

        await driver.actions().move({origin: element}).perform();
        await driver.sleep(5000);
        
    } finally {
        await driver.quit();
    }
})();
