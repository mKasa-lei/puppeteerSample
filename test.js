const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.leihauoli.com/');
    await page.waitFor(3000);
    await page.screenshot({path: 'test.png'});
    await browser.close();
})();