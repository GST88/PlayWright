import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://jqueryui.com/button/");

 let WebElement = await page.locator("//input[@type='submit']").nth(1);
  //let WebElement = await page.locator("//input[@value='A submit button']").nth(1);


let buttonvisible = await WebElement.isVisible();
console.log("buttonvisible : " + buttonvisible);
    if (buttonvisible==true)
    {
        let buttonenabled = await WebElement.isEnabled();
            if (buttonenabled==true)
            {
                console.log("button is enabled");
                let ButtonTextContent = await WebElement.getAttribute('value');
                console.log("ButtonTextContent : " +ButtonTextContent);
                // await expect(WebElement).toHaveText("Search");
                if (ButtonTextContent=="A submit button")
                {
                    await WebElement.click();
                    console.log("button clicked");
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