import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");


await page.on('dialog', async dialog => {
        await dialog.accept()
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);
    });

let clickme = await page.locator("//button[@id='confirmBox']");
await clickme.click();

 

// let textis = await page.locator("//h1[text()='Pop up boxes in HTML']");
// let textis1 = await textis.textContent();
// console.log("text is : " + textis1 );



await page.pause();
})