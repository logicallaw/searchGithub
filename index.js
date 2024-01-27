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

    //크롤링을 위해 페이지 이동합니다.
    //https://github.com/[github_name]/[repository_name]/[code_file_name]
    const link = "https://github.com/logicallaw/baekjoon/blob/main/baekjoon/10810-2.cpp";
    await page.goto(link);

    //selector 변수에 copy된 selector 주소를 붙여놓습니다.
    const selector = '#read-only-cursor-text-area';
    await page.waitForSelector(selector);
    //selector의 텍스트를 읽어 code 변수에 저장합니다.
    const code = await page.$eval(selector, (element) => element.textContent)

    console.log('크롤링한 코드를 출력합니다.\n', code);
    await broswer.close();
})();