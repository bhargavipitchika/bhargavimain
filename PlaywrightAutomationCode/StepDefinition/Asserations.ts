import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber'

import { Browser, chromium, expect, Page } from 'playwright/test'

setDefaultTimeout(60000)

let browser: Browser, page: Page

let context

Given('Launch the web Browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    }


    )
    context = await browser.newContext({

        viewport: null

    })

    page = await context.newPage()

    await page.goto('https://www.amazon.in/')
})

Then('verify the hard Asserations', async function () {

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()
    await page.getByPlaceholder('Search Amazon.in').fill('laptops')
    await expect(page.locator('#nav-search-submit-button')).toBeVisible()
    await page.locator('#nav-search-submit-button').click()
    //await expect(page.locator('//*[text()="Mobiles"]')).toBeHidden()
    // fails 
    /*Expected: hidden
           Received: visible*/

    //await expect(page.locator('//*[text()="Mobiles"]')).toBeDisabled()
    //// fails 
    /*Expected: disabled
           Received: enabled*/

    await expect(page.locator('//*[text()="Sell"]')).toBeEnabled()
    await expect(page.locator('//*[text()="Sell"]')).toBeAttached()
    await expect(page.locator('//*[text()="Sell"]')).toHaveCount(1)
    await page.locator('//*[text()="Sell"]').click()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator('//*[@class="form-control"]')).toHaveCount(7)
    await expect(page.locator('//*[@class="title"]')).toContainText(['Alerts & Popups'])
    await expect(page.locator('//*[@class="title"]')).toContainText(['Alerts & Popups', 'Drag and Drop'])
    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

    await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()

    await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('Bhargavi')


})


Then('verify the soft Asserations', async function () {

    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()
    await page.getByPlaceholder('Search Amazon.in').fill('laptops')
    await expect.soft(page.locator('#nav-search-submit-button')).toBeVisible()
    await page.locator('#nav-search-submit-button').click()
    //await expect(page.locator('//*[text()="Mobiles"]')).toBeHidden()
    // fails 
    /*Expected: hidden
           Received: visible*/

    //await expect(page.locator('//*[text()="Mobiles"]')).toBeDisabled()
    //// fails 
    /*Expected: disabled
           Received: enabled*/

    await expect.soft(page.locator('//*[text()="Sell"]')).toBeEnabled()
    await expect.soft(page.locator('//*[text()="Sell"]')).toBeAttached()
    await expect.soft(page.locator('//*[text()="Sell"]')).toHaveCount(1)
    await page.locator('//*[text()="Sell"]').click()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect.soft(page.locator('//*[@class="form-control"]')).toHaveCount(7)
    await expect.soft(page.locator('//*[@class="title"]')).toContainText(['Alerts & Popups'])
    await expect.soft(page.locator('//*[@class="title"]')).toContainText(['Alerts & Popups', 'Drag and Drop'])
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeVisible()

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('Prashvita')


})




Then('close the web Browser', async function () {

    await page.close()

})