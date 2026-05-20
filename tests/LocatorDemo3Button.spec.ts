import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://www.meghanabus.in/manage-bookings.html");

//let WebElement = await page.locator(".btn.theme-btn.btn-default");
let WebElement = await page.locator("//button[text()='Search']");

let buttonvisible = await WebElement.isVisible();
console.log("buttonvisible : " + buttonvisible);

    if(await WebElement.isEnabled()){
    console.log("button is enabled");
    }
    else {
        console.log("button is not enabled");
    }

let ButtonTextContent = await WebElement.textContent();
console.log("ButtonTextContent : " +ButtonTextContent);
await expect(WebElement).toHaveText("Search");

// await page.click('WebElement');
await WebElement.click();

//await page.pause();
})