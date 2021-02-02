const puppeteer = require('puppeteer')

let page = null
let browser = null

browser = puppeteer.launch({ headless: false })
  .then(async (browser) => {
    page = await browser.newPage()

    page.setViewport({
      width: 1280,
      height: 800,
      isMobile: false,
    })

    page.goto('https://eberegit.github.io/Geo-Search/index.html', {
      waitUntil: 'networkidle2'
    })

    await page.waitForTimeout(2000)

    await page.type('input[name="search-field"]', 'Obudu Cattle Ranch, Obudu, Nigeria', {
      delay: 5,
    })

    await page.click('input[name="submit-button"]');

    await page.waitForTimeout(5000);

    await browser.close();

  })
  .catch((error) => {
    console.log(error)
  })


