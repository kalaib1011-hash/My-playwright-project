import {test} from '@playwright/test'
//simple dropdown
test('dropdown', async({page})=>{

await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.locator('#simple-dropdown select').selectOption({value:'option3'}); //by value
await page.locator('#simple-dropdown select').selectOption({label:'Option 1'}); //by text
await page.locator('#simple-dropdown select').selectOption({index:1}) //by index
})
/************added for test purpose*************/
//Multiselect dropdown
test('multiselect',async({page})=>{
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html')

    await page.locator('[data-target="multi-select-dropdown"]').click();
    await page.locator('.form-multiselect').selectOption([{value:'option1'},{index:2},{label:'Option 4'}]);
})
