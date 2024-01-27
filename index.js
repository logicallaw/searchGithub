const puppeteer = require("puppeteer");

(async () => {
    const broswer = await puppeteer.launch({
        headless : true
    });
    const page = await broswer.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });

    //Let's go to the page for crawling.
    //example : "https://github.com/[the_name_of_Github]/[your_repository]/[your_code_file]"
    const link = "https://github.com/logicallaw/baekjoon/blob/main/baekjoon/10810-2.cpp";
    await page.goto(link);

    //Attach the copied selector address to the selector variable.
    const selector = '#read-only-cursor-text-area';
    await page.waitForSelector(selector);
    //Reads the text of the selector and saves it in the code variable.
    const code = await page.$eval(selector, (element) => element.textContent)

    console.log('print the code variable\n', code);
    await broswer.close();
})();