import {test} from '@playwright/test'

test('tablehandling', async({page})=>{
await page.goto("https://demoqa.com/webtables");
   await page.waitForTimeout(4000);

       const table = await page.locator('.-striped');

 const rows= await table.locator('tbody tr');
//const number= await rows.count();
//console.log(count);  //returns the no. of rows in a table

 for(let i=0;i< await rows.count();i++){

 const name =await rows.nth(i).locator('td').nth(0).textContent();
// // //await console.log(name);
 if (name === 'Alden'){
    await rows.nth(i).locator('[title="Edit"]').click();
     // await page.waitForTimeout(3000);
  
  //await page.locator('[placeholder="Salary"]').fill('40000');
   await page.waitForTimeout(4000);
  
} }
})

test('addrow',async()=>{


    
})