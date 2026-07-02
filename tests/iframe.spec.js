import {test} from '@playwright/test'

test('iframe',async({page})=>{

await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

const frame= await page.frameLocator('[name="globalSqa"]')
await frame.locator('//h3[text()="Database Testing Training"]').click();

//await page.goBack();
//await page.waitForLoadState('networkidle');
//const frame1= await page.frameLocator('[name="globalSqa"]');

 //await frame1.locator('//h3[text()="Manual Testing Training"]').waitFor();

 await frame.locator('//h3[text()="Manual Testing Training"]').click();


})