import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://demos.devexpress.com/aspxeditorsdemos/ListEditors/MultiSelect.aspx");


let WebElement = await page.locator("//span[@id='ContentHolder_lbFeatures_TG_D']");
//let WebElement = await page.locator("//input[@value='U']").nth(1);



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
//await expect(CheckboxCheck).

await WebElement.click();

let CheckboxCheck1 = await WebElement.isChecked();
console.log("CheckboxCheck after click : " +CheckboxCheck1);

await page.pause();
})