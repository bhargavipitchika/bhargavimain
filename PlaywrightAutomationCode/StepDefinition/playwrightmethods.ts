import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber'

import { Browser, chromium, expect, Page } from 'playwright/test'

setDefaultTimeout(60000)

let browser: Browser, page: Page

let context

Given('I launch  my browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    }


    )
    context = await browser.newContext({

        viewport: null

    })

    page = await context.newPage()

    //  await page.goto('https://testautomationpractice.blogspot.com/')
})

Then('I verify playwright methods', async function () {

    console.log("=====to launch the application==========")
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log("=====to refresh the web page=========")
    await page.reload()
    console.log("=====to scroll to the web element==========")
    await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()
    console.log("=====to click on the web element==========")
    await page.getByText('New Tab').click()
    console.log("=====to go to the previous tab==========")
    await page.bringToFront()
    console.log("=======to enter text to the web element=============")
    await page.getByPlaceholder('Enter Name').fill('bhargavi')
    await page.locator('#email').type('bhargavi@gmail.com')
    console.log("==========to get more than one web element count===========")
    let webelementcount = await page.locator('//input[@class="form-control"]').all()
    console.log('webelement count is :', webelementcount.length)
    console.log("==========to get the title of the webpage===========")
    var title = await page.title()
    console.log(title)
    var url = await page.url()
    console.log(url)

    console.log("==========to clear the text of the web element===========")

    await page.locator('#field1').scrollIntoViewIfNeeded()
    await page.locator('#field1').clear()
    await page.locator('#field1').fill('testing')

    console.log("==========to get the text of a webelemnt============")
    var text = await page.locator('//h2[text()="Alerts & Popups"]').innerText()
    console.log('1st way to get text of webelement:', text)
    text = await page.locator('//*[text()="Alerts & Popups"]').innerText()
    console.log('2nd way to get text of webelement:', text)
    text = await page.locator('//*[contains(text(),"Alerts & Popups")]').innerHTML()
    console.log('3rd way to get text of webelement:', text)
    text = await page.locator('//*[starts-with(text(),"Alerts & Popups")]').innerHTML()
    console.log('4th way to get text of webelement:', text)
    console.log("==========to get the text of more than one web element============")

    console.log("==========1st way============")

    var textofall = await page.locator('//*[@class="title"]').allTextContents()
    console.log('count of allwebelemnt:', textofall.length)

    for (let i = 0; i < textofall.length; i++) {
        console.log(textofall[i])
    }

    console.log("==========2nd way============")

    var textofall = await page.locator('//*[@class="title"]').allInnerTexts()
    console.log('count of allwebelemnt:', textofall.length)

    for (let i = 0; i < textofall.length; i++) {
        console.log(textofall[i])
    }

    console.log("==========right click of the web element============")
    await page.getByPlaceholder('Enter Phone').click({ button: 'right' })

    console.log("==========drag and drop============")
    var drag = await page.locator('//*[@id="draggable"]')
    var drop = await page.locator('//*[@id="droppable"]')
    await drag.scrollIntoViewIfNeeded()
    await drag.dragTo(drop)

    console.log("==========selenium and===========")
    await page.locator('//*[@type="text"and@class="wikipedia-search-input"]').fill('testing')
    console.log("==========playwright and===========")
    await page.locator('.wikipedia-search-input').and(page.locator('#Wikipedia1_wikipedia-search-input')).type('playwright')
    await page.locator('#name').and(page.getByPlaceholder('Enter Name')).fill('test')
    await page.getByText('START').scrollIntoViewIfNeeded()
    await page.getByText('START').dblclick()








})
Then('I verify playwright methods part2', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log("=========visible======")
    await page.getByLabel('Female').scrollIntoViewIfNeeded()
    var visible = await page.getByLabel('Female').isVisible()
    if (visible == true) {
        await page.getByLabel('Female').click()
    }
    console.log("=========hidden======")
    var hidden = await page.locator('#sunday').isHidden()
    if (hidden == false) {
        await page.locator('#sunday').click()
    }
    console.log("=========disabled======")
    var disabled = await page.locator('#wednesday').isDisabled()
    if (disabled == false) {
        await page.locator('#wednesday').click()
    }
    console.log("=========enabled======")
    var enabled = await page.locator('#thursday').isEnabled()
    if (enabled == true) {
        await page.locator('#thursday').click()
    }
    var editable = await page.getByPlaceholder('Enter EMail').isEditable()
    if (editable == true) {
        await page.getByPlaceholder('Enter EMail').fill('bhargavi@gmail.in')
    }
    console.log("=========checked======")

    var checked = await page.locator('#saturday').isChecked()
    if (checked == false) {
        // 1st way
        // await page.locator('#saturday').click()
        // 2nd way
        await page.locator('#saturday').setChecked(true)

    }
    checked = await page.locator('#saturday').isChecked()

    if (checked == true) {
        // 1st way to uncheck
        // await page.locator('#saturday').click()
        // 2nd way to uncheck
        //await page.locator('#saturday').setChecked(false)
        // 3rd way to uncheck
        await page.locator('#saturday').uncheck()
    }

})

Then('I verify playwright methods part3', async function () {
    await page.goto('https://www.amazon.in/')
    console.log("=========hover======")
    await page.locator('#nav-link-groceries').hover()
    console.log("=========highlight======")
    await page.getByPlaceholder('Search Amazon.in').highlight()
    await page.getByPlaceholder('Search Amazon.in').fill('bags')
    console.log("=========get attribute======")
    var AttributeValue = await page.getByPlaceholder('Search Amazon.in').getAttribute('placeholder')
    console.log('attributevalue of placeholder is', AttributeValue)
    AttributeValue = await page.getByPlaceholder('Search Amazon.in').getAttribute('class')
    console.log('attributevalue of class is', AttributeValue)
    AttributeValue = await page.getByPlaceholder('Search Amazon.in').getAttribute('id')
    console.log('attributevalue of id is', AttributeValue)
})

Then('I verify playwright methods part4', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log('=========1st way to clear the text in the textbox using clear method====')
    await page.locator('#field1').scrollIntoViewIfNeeded()
    await page.locator('#field1').clear()
    await page.locator('#field1').fill('bhargavi')
    console.log('=========2nd way to clear the text in the textbox using fill method====')
    await page.locator('#field1').fill('')
    await page.locator('#field1').fill('Suresh')
    console.log('=========2nd way to clear the text in the textbox using Alt+ctrl and delete with keyboard method====')
    page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')
    await page.keyboard.up('Control')
    await page.keyboard.insertText('playwright')
    console.log('=========4th way to enter text to the textbox by using presssequentially it will the append the text with the earlier text same as text method====')
    await page.locator('#field1').clear()
    await page.locator('#field1').pressSequentially('test')
    await page.locator('#field1').pressSequentially('Automation')
    console.log('=========handling dropdown using selectoption method====')

    var ColourDropdown = await page.locator('#colors')
    await ColourDropdown.scrollIntoViewIfNeeded()
    await ColourDropdown.selectOption('Red')
    await ColourDropdown.selectOption('Blue')
    await ColourDropdown.selectOption(['Green', 'Yellow'])
    await ColourDropdown.selectOption({ index: 5 })
    await ColourDropdown.selectOption([{ index: 5 }, { index: 0 }, { index: 2 }])
    var CountryDropDown = await page.locator('#country')
    await CountryDropDown.scrollIntoViewIfNeeded()
    await CountryDropDown.selectOption('India')
    console.log('=========screenshots====')

    console.log('=========1st way to take the web element level screenshot====')
    await page.getByPlaceholder('Enter EMail').fill('test@gmail.com')
    await page.getByPlaceholder('Enter EMail').screenshot({ path: 'webelementlevel.png' })
    console.log('=========2nd way to take the screenshot upto screen length====')
    await page.screenshot({path:'./PlaywrightAutomationCode/Screenshots/uptoscreenlength.jpg'})
    console.log('=========3rd way to take the full page screenshot====')
    await page.screenshot({path:'C:/bhargavi playwright/notes/Screenshots/fullpage.jpg',fullPage:true})
console.log('=========upload file====')
await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
await page.locator('#singleFileInput').setInputFiles('webelementlevel.png')
await page.locator('//*[text()="Upload Single File"]').click()
console.log('=========upload file====')
await page.locator('#multipleFilesInput').setInputFiles(['./PlaywrightAutomationCode/Screenshots/uptoscreenlength.jpg',"C:\\bhargavi playwright\\notes\\Screenshots\\fullpage.jpg"])
await page.locator('//*[text()="Upload Multiple Files"]').click()

await page.locator('#shadow_host').locator('input[type="text"]').scrollIntoViewIfNeeded()
await page.locator('#shadow_host').locator('input[type="text"]').fill('Bhargavi')
await page.goto('https://selectorshub.com/xpath-practice-page/')
await page.locator('#userName').locator('#kils').scrollIntoViewIfNeeded()
await page.locator('#userName').locator('#kils').fill('testing')
await page.locator('#userName').locator('#app2').getByPlaceholder('Enter pizza name').fill('chicken pizza')
})






Then('I close my browser', async function () {

    await browser.close()

})

