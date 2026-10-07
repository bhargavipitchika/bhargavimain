import { Given, Then,setDefaultTimeout } from '@cucumber/cucumber'

import { Browser, chromium, Page } from 'playwright/test'

setDefaultTimeout(30000)

let browser: Browser, page: Page

let context

Given('launch the browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    }


    )
    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then('open the url of facebook', async function () {

    await page.goto("https://www.facebook.com/")

}
)
Then('open the url of Gmail', async function () {

    await page.goto("https://myaccount.google.com/")

}
)

Then('close the browser', async function () {

    await page.close()
    
})