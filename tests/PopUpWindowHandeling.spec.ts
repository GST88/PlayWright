import { test, expect } from '@playwright/test';

test('gmail', async ({ page,context }) => {
await page.goto("https://accounts.google.com/");


let clickme = await page.locator("//a[@href='https://support.google.com/chrome/answer/6130773?hl=en-US']");
await clickme.click();
  await context.waitForEvent('page');
   await page.waitForTimeout(2000);

let pageswitch = await page.context().pages();
let secondwindow = await pageswitch[1];
await secondwindow.bringToFront();

let textis = await secondwindow.locator("//h1[text()='Browse Chrome as a guest']");
let textis1 = await textis.textContent();
console.log("text is: " +textis1);

await page.bringToFront();


await page.pause();



})







