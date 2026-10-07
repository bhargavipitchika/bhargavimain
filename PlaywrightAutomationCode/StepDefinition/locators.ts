import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { BrowserContext, Browser, Page, chromium } from "playwright/test";
import{data1,data2,data3}from "../files/datafile.json";

setDefaultTimeout(50000)
let browser: Browser, page: Page
let context

Given('Launch the Browser', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']
    })

    context = await browser.newContext({
        viewport: null
    })

    page = await context.newPage()
})
Then("open different URLs and pratice Locators", async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(30000)

    // getbyplaceholder 

    await page.getByPlaceholder("Enter Name").fill("bhargavi")
    //await page.waitForTimeout(100000)
    await page.getByPlaceholder("Enter EMail").fill('test.gmail.com')
    // await page.waitForTimeout(30000)
    // getbytext

    await page.getByText('START').click()
    await page.getByText('STOP').click()

    //getbylabel 

    await page.getByLabel('Thursday').click()
    //getbyrole
    await page.getByRole('checkbox', { name: 'tuesday' }).click()

    // getbyalttext 
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByAltText("ParaBank")

    await page.getByTitle("ParaBank")

    //await page.getbytestid(‘attribute value of the test id).methods()

    //<button data-testid="submit-button">Submit</button>

    //await page.getByTestId('submit-button').click()


})

Then('learn xpath and css', async function () {
    page.goto("https://testautomationpractice.blogspot.com/")

    // two type absolute and relative xpath 

    //absolute xpath
    //await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill("bhargavi")
    //await page.locator('')

    //relative xpath
    await page.locator("//input[@id='name']").fill('bhargavi')

    await page.locator("//*[@placeholder='Enter EMail']").fill('test@gmail.com')

    //css xpath
    // input[id='name']
    await page.locator("input[placeholder='Enter Phone']").fill('786443378')

    await page.locator(".wikipedia-search-input").fill('playwright')

    await page.locator("#textarea").fill('hyderabad')

})

Then('learn xpath methods', async function () {

    page.goto("https://testautomationpractice.blogspot.com/")

    // contains method 

    await page.locator('//input[contains(@id,"name")]').fill('bhargavi')
    await page.locator('//*[contains(@id,"email")]').fill('bhargavi@gmail.com')

    // starts-with method 

    await page.locator('//input[starts-with(@id,"phone")]').fill('89654325')
    await page.locator('//*[starts-with(@id,"textarea")]').fill('hyderabad')

    // text method used to get text from webpages

    // 1st way 

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way of text method :", text)

    var text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2ndst way of text method :", text)
    var text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way of text method :", text)
    var text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way of text method :", text)

    /// and method 

    await page.locator('//*[@type="text"and @class ="wikipedia-search-input"]').fill('testing')

    // or method 

    var CountOr = await page.locator('//*[@type="text" or @class ="wikipedia-search-input"]').all()


    console.log('count of CountOr is :', CountOr.length)
})

Then('learn xpath axes', async function () {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // parent
    var parentCount = await page.locator('//*[@id="female"]//parent::div').all()

    console.log("parentCount is :", parentCount.length) //1

    // ancestor
    var ancestorCount = await page.locator('//*[@id="female"]//ancestor::div').all()

    console.log("ancestorCount is :", ancestorCount.length) //21

    // preceding
    var precedingCount = await page.locator('//*[@id="sunday"]//preceding::div').all()

    console.log("precedingCount is :", precedingCount.length) // 99
    var precedingCount = await page.locator('//*[@id="sunday"]//preceding::label').all()

    console.log("precedingCount is :", precedingCount.length) // 8

    var precedingCount = await page.locator('//*[@id="sunday"]//preceding::input').all()

    console.log("precedingCount is :", precedingCount.length) // 5
    // chilc

    var childCount = await page.locator('//div[@class="form-group"]//child::input[@type="text"]').all()

    console.log("childCount is :", childCount.length) // 3
    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').first().fill('bhargavi')
    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').last().fill('98765543')
    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').nth(1).fill('bhargavi@gmail.com')

    // descendant 
    var descendantCount = await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').all()

    console.log("descendantCount is :", childCount.length)
    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').first().click()
    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').last().click()
    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').nth(1).click()

    // following

    var FollowingCount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()

    console.log("FollowingCount is :", FollowingCount.length)

    //following sibiling

    var Followingsibiling = await page.locator('//input[@id="field1"]//following-sibling::input').all()
    console.log('following sibiling count is :', Followingsibiling)
    Followingsibiling = await page.locator('//input[@id="field1"]//following-sibling::br').all()
    console.log('following sibiling count is :', Followingsibiling)
    await page.locator('//input[@id="field1"]//following-sibling::input').fill('quality testing ')


})

Then('fetch the data2 from json file',async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill(data2.name)
     await page.getByPlaceholder("Enter EMail").fill(data2.email)
     await page.getByPlaceholder("Enter Phone").fill(data2.phone)
     await page.locator('//*[@id="textarea"]').fill(data2.addres)

    
    
})
Then('fetch the data1 from json file',async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill(data1.name)
     await page.getByPlaceholder("Enter EMail").fill(data1.email)
     await page.getByPlaceholder("Enter Phone").fill(data1.phone)
     await page.locator('//*[@id="textarea"]').fill(data1.addres)

    
    
})

Then('fetch the data3 from json file',async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill(data3.name)
     await page.getByPlaceholder("Enter EMail").fill(data3.email)
     await page.getByPlaceholder("Enter Phone").fill(data3.phone)
     await page.locator('//*[@id="textarea"]').fill(data3.addres)

    
    
})


