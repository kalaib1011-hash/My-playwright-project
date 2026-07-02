import {test} from '@playwright/test'

test('login',async({page})=>{
await page.waitForTimeout(3000);
await page.goto('https://demoqa.com/text-box');
await page.locator('input[type="text"]').fill('kalai');
await page.locator('#userEmail').fill("kalai@gmail.com");
await page.locator('#currentAddress').fill('chennai');
await page.locator('#permanentAddress').fill('Trichy');
await page.locator('#submit').click();
})
