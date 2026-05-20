import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://www.calculator.net/mortgage-calculator.html");


let WebElement = await page.locator("//*[@id='content']/div[4]/div/form/table/tbody/tr[6]/td/label/span");


let checkBoxVisible = await WebElement.isVisible();
console.log("checkBoxVisible : " + checkBoxVisible);

    if(await WebElement.isEnabled()){
    console.log("Checkbox is enabled");
    }
    else {
        console.log("checkbox is not enabled");
    }

let CheckboxCheck = await WebElement.isChecked();
console.log("CheckboxCheck : " +CheckboxCheck);

await WebElement.check();

let CheckboxCheck1 = await WebElement.isChecked();
console.log("CheckboxCheck after click : " +CheckboxCheck1);

//await page.pause();
})