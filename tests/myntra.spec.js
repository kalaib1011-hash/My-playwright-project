import {test} from '@playwright/test';

test('myntra', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
})