import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("http://only-testing-blog.blogspot.com/2013/09/test.html");


// let WebElement = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[1]");

// let tabletd = await WebElement.textContent();
// console.log(tabletd);

const rows = page.locator('table tbody tr');

  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {

    const rowTexts = await rows.nth(i).locator('td').allTextContents();

    console.log(rowTexts);
  }




//await page.pause();
})