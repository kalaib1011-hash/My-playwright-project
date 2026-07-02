import {test} from '@playwright/test'

test('frame', async({page})=>{
await page.goto('https://www.hyrtutorials.com/p/frames-practice.html#google_vignette');
//frame2

const frame= await page.frameLocator('#frm2');
await frame.locator("#firstName").fill('kalai');
await frame.locator('#lastName').fill('selvi');
await frame.locator('#femalerb').click();
await frame.locator('#englishchbx').click();
await frame.locator('#chinesechbx').click();
await frame.locator('#frenchchbx').click();
await frame.locator('#email').fill('kalaiselvi@gmail.com');
})
test('childframehandle',async({page})=>{

    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html#google_vignette');
    const frame1= await page.frameLocator('#frm3');
    const frame2= await frame1.frameLocator('#frm2');
//frame2 inside frame3
await frame2.locator("#firstName").fill('kalai');
await frame2.locator('#lastName').fill('selvi');
await frame2.locator('#femalerb').click();
await frame2.locator('#englishchbx').click();
await frame2.locator('#chinesechbx').click();
await frame2.locator('#frenchchbx').click();
await frame2.locator('#email').fill('kalaiselvi@gmail.com');
})