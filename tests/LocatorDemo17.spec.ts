import { test, expect } from '@playwright/test';

test('gmail', async ({ page }) => {
await page.goto("https://accounts.google.com/");


let clickme = await page.locator("//a[@href='https://support.google.com/chrome/answer/6130773?hl=en-US']");
await clickme.click();


let textis = await page.locator("//h1[text()='Browse Chrome as a guest']");
let textis1 = await textis.textContent();
console.log("text is: " +textis1);

 

// let textis = await page.locator("//h1[text()='Pop up boxes in HTML']");
// let textis1 = await textis.textContent();
// console.log("text is : " + textis1 );



await page.pause();
})