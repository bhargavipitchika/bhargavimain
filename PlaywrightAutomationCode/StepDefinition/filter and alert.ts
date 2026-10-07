import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber'

import { Browser, chromium, expect, Page } from 'playwright/test'

setDefaultTimeout(60000)

let browser: Browser, page: Page

let context

Given('I launch the browser', async function () {

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

Then('I verify playwright filters',async function(){
await page.goto('https://www.saucedemo.com/')
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.locator('#login-button').click()
await page.locator('.inventory_item').filter({hasText :"Sauce Labs Backpack"}).getByRole('button',{name:'Add to cart'}).click()
await page.locator('.inventory_item').filter({hasText :"Sauce Labs Bike Light"}).getByRole('button',{name:'Add to cart'}).click()

await page.locator('.inventory_item').filter({hasText :"Sauce Labs Bike Light"}).getByRole('button',{name:'Remove'}).click()
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator('.form-check.form-check-inline').filter({hasText:"Sunday"}).click()
 await page.locator('.form-check.form-check-inline').filter({hasText:"Mon"}).click()
 await page.locator('.form-check.form-check-inline').filter({hasText:"male"}).first().click()
})

Then('I verify simple alert',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.accept()


    })

    await page.locator('//button[text()="Click for JS Alert"]').click()
})

Then('I verify confirmation alert ok',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.accept()


    })

    await page.locator('//button[text()="Click for JS Confirm"]').click()

})
Then('I verify confirmation alert cancel',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.dismiss()


    })

    await page.locator('//button[text()="Click for JS Confirm"]').click()

})

Then('I verify prompt alert without text ok',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.accept()


    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()

})

Then('I verify prompt alert with text ok',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{

        dialog.accept('Hi Good mroning')
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.accept()


    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()

})


Then('I verify prompt alert cancel',async function(){

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog',dialog=>{
        var dialogtext = dialog.message
        console.log(dialogtext)

        dialog.dismiss()


    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()

})









/*Then('I close the browser',async function(){


    await browser.close()
})*/