import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://demo.guru99.com/test/newtours/reservation.php");


let WebElement = await page.locator("//input[@value='oneway'][@name='tripType']");


let RadioButtonVisible = await WebElement.isVisible();
console.log("RadioButtonVisible : " + RadioButtonVisible);

    if(await WebElement.isEnabled()){
    console.log("Radio Buttonbox is enabled");
    }
    else {
        console.log("Radio Button is not enabled");
    }

let RadioButtonStatus = await WebElement.isChecked();
console.log("RadioButtonStatus : " +RadioButtonStatus);

await WebElement.click();

let RadioButtonStatus1 = await WebElement.isChecked();
console.log("RadioButtonStatus after click : " +RadioButtonStatus1);

//await page.pause();
})