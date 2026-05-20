import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://demo.guru99.com/test/newtours/reservation.php");


let WebElement = await page.locator("//select[@name='toMonth']");


let DropDownVisible = await WebElement.isVisible();
console.log("DropDownVisible : " + DropDownVisible);

    if(await WebElement.isEnabled()){
    console.log("DropDown is enabled");
    }
    else {
        console.log("DropDown is not enabled");
    }

// let RadioButtonStatus = await WebElement.isChecked();
// console.log("RadioButtonStatus : " +RadioButtonStatus);

// await WebElement.selectOption({index:7}); or
//await WebElement.selectOption({label:"June"});or
await WebElement.selectOption({value:"12"});


await page.pause();
})