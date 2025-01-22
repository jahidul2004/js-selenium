const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function practice3() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get("http://www.google.com");
        
        // await driver.manage().window().maximize();

        // For full screen the window
        await driver.manage().window().fullscreen();
        await driver.sleep(3000);

        // For setting the custom window size
        await driver.manage().window().setSize(1200, 1200);
        await driver.sleep(3000);

        //For get the window size
        const windowSize = await driver.manage().window().getSize();
        console.log("Window Size: ", windowSize);

        // For get the window position
        const windowPosition = await driver.manage().window().getPosition;
        console.log("Window Position: ", windowPosition);

        // For minimizing the window
        await driver.manage().window().minimize();

        await driver.sleep(3000);
    } finally {
        await driver.quit();
    }
})();
