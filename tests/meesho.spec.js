import {test} from '@playwright/test';

test('meesho', async ({ page }) => {
  await page.goto('https://www.meesho.com/');
  console.log(await page.title());
  console.log(await page.url());
  await page.screenshot({path:'./meesho.png'});
})