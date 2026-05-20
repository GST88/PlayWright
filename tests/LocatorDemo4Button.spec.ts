import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://www.meghanabus.in/manage-bookings.html");

let WebElement = await page.locator("//button[text()='Search']");

let buttonvisible = await WebElement.isVisible();
console.log("buttonvisible : " + buttonvisible);
    if (buttonvisible==true)
    {
        let buttonenabled = await WebElement.isEnabled();
            if (buttonenabled==true)
            {
                console.log("button is enabled");
                let ButtonTextContent = await WebElement.textContent();
                console.log("ButtonTextContent : " +ButtonTextContent);
                // await expect(WebElement).toHaveText("Search");
                if (ButtonTextContent=="Search")
                {
                    await WebElement.click();
                    console.log("button is clicked");
                }
                else
                {
                    console.log("Button Text is different and button not clicked")
                }
            }
            else 
            {
            console.log("button is not enabled");
            }
    }
    else
    {
        console.log("Button is not visible");
    }




// await page.click('WebElement');
// await WebElement.click();

//await page.pause();
})