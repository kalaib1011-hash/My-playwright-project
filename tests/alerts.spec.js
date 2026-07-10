import {test} from '@playwright/test'
test('alert handling',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//simple alert
    page.on('dialog',(dialog)=>{
        dialog.accept();
        console.log(dialog.type());        //alert
        console.log(dialog.message());    //i am a js alert
    })
    await page.click('button[onclick="jsAlert()"]');
})
//js alerts
test('alerts',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
   page.on('dialog',(dialog)=>{
console.log(dialog.type());
console.log(dialog.message());
   
if(dialog.type()==='alert'){
 dialog.accept();
   }else if(dialog.type()==='confirm'){
 dialog.dismiss();
   }else if(dialog.type()==='prompt'){
     dialog.accept('Helloooo!!')
   }
});
await page.click('button[onclick="jsPrompt()"]');
})
//Dom alert
test('dom alert',async({page})=>{
await page.goto('https://www.flipkart.com/');
try{
    await page.waitForSelector('.b3wTlE',{timeout:4000});
    await page.locator('.b3wTlE').click();
}
catch{
    console.log("no pop up appeared")
}
})
//adding this command line 