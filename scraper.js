const puppeteer = require('puppeteer')


    
    const url = 'https://books.toscrape.com/'
    const main = async () =>{
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto(url)

        const bookData = await page.evaluate(() => {
            const bookPods = Array.from(document.querySelectorAll('.product_pod'))
        })

    }

scrape();