import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");

let alertclick = await page.locator("//button[@id='alertBox']");
await alertclick.click();
console.log("alert box clicked");

await page.waitForTimeout(4000);

await page.on('dialog', async dialog => {
        await dialog.accept()
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);
    });

let clickme = await page.locator("//button[@id='confirmBox']");
await clickme.click();
console.log("popup box opened and clicked ok");

await page.waitForTimeout(4000);

let promptclick = await page.locator("//button[@id='promptBox']")
await promptclick.click();

let prmptoutput = await page.locator("//div[@id='output']");
let prmptoutputText = prmptoutput.textContent();
console.log(prmptoutputText);


await page.waitForTimeout(4000);


await page.on('dialog', async dialog => {
        await dialog.defaultValue();
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);
    });

let clickme1 = await page.locator("//button[@id='confirmBox']");
await clickme1.click();
console.log("popup box opened and clicked cancel");

 


await page.pause();
})