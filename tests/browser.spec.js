import {test,chromium}from '@playwright/test'

test('browser handling', async()=>{

     const browser= await chromium.launch()

     //context1
     const context=await browser.newContext({
        recordVideo:{
            dir:'./videos/'
        }
     })
     const page=await context.newPage();
     await page.goto('https://www.amazon.in/');
    
    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com/');

    //context2
    const context1= await browser.newContext({
        recordVideo:{
            dir:'./videos/'
        }
    })
    const page3= await context1.newPage();
    await page3.goto('https://www.myntra.com/');

    const page4 =await context1.newPage();
    await page4.goto('https://www.meesho.com/')
})

