//raspagem de dados

const puppeteer = require('puppeteer')

let scrape = async()=>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://books.toscrape.com')

    const result = await page.evaluate(()=>{
        //tudo aqui dentro é executado no browser virtual
        const books = []
        document.querySelectorAll('section > div > ol > li img')
            .forEach(book => books.push(book.getAttribute('alt')))
        return books
    })
    browser.close()
    return result
}

scrape()
    .then(result=>console.log(result))
    .catch(err=>console.err(err))




