import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber'

import { Browser, chromium, Page } from 'playwright/test'

setDefaultTimeout(60000)

let browser: Browser, page: Page

let context

Given('Launch the new Browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    }


    )
    context = await browser.newContext({

        viewport: null

    })

    page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')
})

Then("open the URL and i verify the the webtable in static way", async function () {


    await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()
    var webtable = await page.locator('//*[@name="BookTable"]').isVisible()
    if (webtable == true) {
        console.log("webtable is visible")

        let Expectedtext = 'Animesh'
        let actualtext = await page.locator('//*[@name="BookTable"]//tr[4]//td[2]').innerText()
        if (actualtext == Expectedtext)
            console.log(actualtext, 'is displayed same as expected')


        else {
            console.log(actualtext, 'is not displayed as expected')

        }
    }
    else {
        console.log("webtable is not visible")
    }

})

Then("open the URL and i verify the the webtable negative in static way", async function () {


    await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()
    var webtable = await page.locator('//*[@name="BookTable"]').isVisible()
    if (webtable == true) {
        console.log("webtable is visible")

        let Expectedtext = 'Amit'
        let actualtext = await page.locator('//*[@name="BookTable"]//tr[4]//td[2]').innerText()
        if (actualtext == Expectedtext)
            console.log(actualtext, 'is displayed same as expected')


        else {
            console.log(actualtext, 'is not displayed as expected')

        }
    }
    else {
        console.log("webtable is not visible")
    }

})
Then('open the URL and i verify the the webtable in dynamic way', async function () {

    await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()
    var webtable = await page.locator('//*[@name="BookTable"]').isVisible()
    if (webtable == true) {

        console.log("webTable is displayed in the web page") //webTable is displayed in the web page

        let rows = await page.locator("//*[@name='BookTable']//tr").all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = "Animesh"

                        let actualText = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td[" + j + "]").innerText()

                        if (actualText == expectedText) {

                            console.log(expectedText, " is displayed in the web table in row no:", i, "and column no is:", j)

                            // Animesh is displayed in the web table in row no: 4 and column no is:2
                        }

                        //let expectedText = "Mukesh"

                        //let actualText = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //  console.log(expectedText, " is displayed in the web table in row no:", i, "and column no is:", j)

                        // Mukesh is displayed in the web table in row no: 3 and column no is:2

                        // Mukesh is displayed in the web table in row no: 5 and column no is:2

                        // }
                    }
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
}
)

Then('open the URL and i verify the the webtable headers in dynamic way', async function () {

    await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()
    var webtable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webtable == true) {

        console.log('webtable is visible')
        let rows = await page.locator("//*[@name='BookTable']//tr").all()
        if (rows.length > 0) {
            console.log("rows are present")
            for (let i = 0; i <= rows.length; i++) {
                if (i == 1) {

                    let columns = await page.locator("//*[@name='BookTable']//tr[" + i + "]//th").all()
                    if (columns.length > 0) {
                        for (let j = 1; j <= columns.length; j++) {

                            let text = await page.locator("//*[@name='BookTable']//tr[" + i + "]//th[" + j + "]").innerText()
                            console.log("header text is:", text)
                        }
                    }
                }
            }
        }
        else {
            console.log("not rows are present")
        }

    }

    else {
        console.log('webtable is not visible')
    }

})
Then('open the URL and i verify the the webcalender in dynamic way', async function () {
    await page.locator("#datepicker").scrollIntoViewIfNeeded()
    await page.locator("#datepicker").click()
    let WebCalender = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()
    if (WebCalender == true) {
        console.log('WebCalender is visible')
        let rows = await page.locator('//*[@class="ui-datepicker-calendar"]//tr').all()
        if (rows.length > 0) {
            let expecteddate = '23'
            for (let i = 2; i <= rows.length; i++) {
                let columns = await page.locator('//*[@class="ui-datepicker-calendar"]//tr[' + i + ']//td').all()
                if (columns.length > 0) {
                    for (let j = 1; j <= columns.length; j++) {
                        let actualDate = await page.locator('//*[@class="ui-datepicker-calendar"]//tr[' + i + ']//td[' + j + ']').innerText()
                        if (actualDate == expecteddate) {
                            console.log(expecteddate, " is displayed in the web table")

                            await page.waitForTimeout(3000)

                            await page.locator('//*[@class="ui-datepicker-calendar"]//tr[' + i + ']//td[' + j + ']').click()
                        }

                    }
                }
            }
        }
    }
    else {

        console.log('Webcalender is not visible')
    }


})
Then('verify the webcalender in static way1', async function () {
    await page.locator('#datepicker').scrollIntoViewIfNeeded()



    await page.locator('#datepicker').click()

    let webCalendarTable = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()

    if (webCalendarTable == true) {

        console.log("webCalendarTable is displayed in the web page") //webCalendarTable is displayed in the web page

        let expectedDate = "16"

        let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web table") //16 is displayed in the web Calendar Table

            await page.waitForTimeout(3000)

            await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").click()
        }
        else {
            console.log(expectedDate, " is not displayed in the web table")
        }
    }
    else {
        console.log("webCalendarTable is not displayed in the web page")
    }




})

Then('verify the webcalender in static way2', async function () {
    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    //await page.waitForTimeout(3000)

    await page.locator('#datepicker').click()

    let webCalendarTable = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()

    if (webCalendarTable == true) {

        console.log("webCalendarTable is displayed in the web page") //webCalendarTable is displayed in the web page

        let expectedDate = "23"

        let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web table")

            //await page.waitForTimeout(3000)

            await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").click()
        }
        else {
            console.log(expectedDate, " is not displayed in the web table") //23 is not displayed in the web Calendar Table
        }
    }
    else {
        console.log("webCalendarTable is not displayed in the web page")
    }

    //await page.waitForTimeout(30000)

})

Then('verify the dynamic table in static way1', async function () {
    await page.locator('//*[@id="taskTable"]').scrollIntoViewIfNeeded()
    var DynamicTable = await page.locator('//*[@id="taskTable"]').isVisible()
    if (DynamicTable == true) {
        console.log("Dynamic is visible")

        let Expectedtext = '44.0 MB'
        let actualtext = await page.locator('//*[@id="taskTable"]//tr[1]//td[2]').innerText()
        if (actualtext == Expectedtext)
            console.log(actualtext, 'is displayed same as expected')


        else {
            console.log(Expectedtext, 'is not displayed as expected')

        }
    }
    else {
        console.log("Dynamictable is not visible")
    }

})

Then('verify the dynamic table in dyanamic way', async function () {

    await page.locator('//*[@id="taskTable"]').scrollIntoViewIfNeeded()
    var Dynamictable = await page.locator('//*[@id="taskTable"]').isVisible()
    if (Dynamictable == true) {

        console.log("DynamicTable is displayed in the web page") //Dynamictable is displayed in the web page

        let rows = await page.locator('//*[@id="taskTable"]//tr').all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator('//*[@id="taskTable"]//tr[' + i + ']//td').all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = "44.0MB"

                        let actualText = await page.locator('//*[@id="taskTable"]//tr[' + i + ']//td[' + j + ']').innerText()

                        if (actualText == expectedText) {

                            console.log(expectedText, " is displayed in the web table in row no:", i, "and column no is:", j)

                            // Animesh is displayed in the web table in row no: 4 and column no is:2
                        }

                        //let expectedText = "Mukesh"

                        //let actualText = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //  console.log(expectedText, " is displayed in the web table in row no:", i, "and column no is:", j)

                        // Mukesh is displayed in the web table in row no: 3 and column no is:2

                        // Mukesh is displayed in the web table in row no: 5 and column no is:2

                        // }
                    }
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
}
)
Then('verify the complete data from dynamic table in dyanamic way', async function () {

    await page.locator('//*[@id="taskTable"]').scrollIntoViewIfNeeded()
    var Dynamictable = await page.locator('//*[@id="taskTable"]').isVisible()
    if (Dynamictable == true) {

        console.log("DynamicTable is displayed in the web page") //Dynamictable is displayed in the web page

        let rows = await page.locator('//*[@id="taskTable"]//tr').all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator('//*[@id="taskTable"]//tr[' + i + ']//td').all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {



                        let Text = await page.locator('//*[@id="taskTable"]//tr[' + i + ']//td[' + j + ']').innerText()



                        console.log(Text, " is displayed in the web table in row no:", i, "and column no is:", j)





                    }
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
}
)

Then('verify the Dynamictable  headers in dynamic way', async function () {

    await page.locator('//*[@id="taskTable"]').scrollIntoViewIfNeeded()
    var Dynamictable = await page.locator('//*[@id="taskTable"]').isVisible()
    if (Dynamictable == true) {

        console.log("DynamicTable is displayed in the web page") //Dynamictable is displayed in the web page

        let rows = await page.locator('//*[@id="taskTable"]//tr').all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 1; i <= rows.length; i++) {
                if(i==1)
                {
                    let column = await page.locator('//*[@id="taskTable"]//tr['+i+']//th').all()
                    if(column.length>0){

                        for(let j=1;j<=column.length;j++){
                            let text = await page.locator('//*[@id="taskTable"]//tr['+i+']//th['+j+']').innerText()
                            console.log('headers are:',text)
                        }
                    }
                    
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
}
)





