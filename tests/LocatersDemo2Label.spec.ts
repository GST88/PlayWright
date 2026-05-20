import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://login.squarespace.com/");
//let WebElement =await page.locator("input[@name='email']");
let WebElement = await page.locator("input[name='email']");
let labelVisible = await WebElement.isVisible();
console.log("labelVisible : " + labelVisible);



if(await WebElement.isEnabled()){
console.log("Its enabled");
}
else {
    console.log("its not enabled");
}

let WebPlaceholder = await WebElement.getAttribute("placeholder");
console.log("WebPlaceholder : " +WebPlaceholder);

await WebElement.fill("RBG@gmail.com");

let EnteredValue = await WebElement.inputValue();
console.log("EnteredValue : " + EnteredValue);

//await page.pause();
})