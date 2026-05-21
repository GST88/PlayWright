import { test, expect } from '@playwright/test';

test('gmail', async ({ page,context }) => {
await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");


let clickme = await page.locator("//button[@id='newWindowsBtn']");
await clickme.click();
  await context.waitForEvent('page');
   await page.waitForTimeout(2000);

let pageswitch = await page.context().pages();

let allpages = await pageswitch.length;

console.log("Total no of pages: " + allpages);

// let secondwindow = await pageswitch[1];
// //await secondwindow.bringToFront();

for(let i:number=0; i<allpages;i++){
    let secondwindow = await pageswitch[i];
    let pagetittle = await secondwindow.title();
    if (pagetittle=="XPath Practice - H Y R Tutorials")
    {
        console.log("Page index is: " + i);
        console.log(" Page title is: " +pagetittle)
        let textis = await secondwindow.locator("//h1[@class='post-title entry-title']");

        let textis2 = await textis.textContent();
             console.log("text is: " + textis2)
              break;

              
        // let textis1 = await textis.isVisible();
        
        // if (textis1 == true)
        //     {        
        //      let textis2 = await textis.textContent();
        //      console.log("text is: " + textis2)
        //       break;
                  
        //     }
    }
}

// await page.bringToFront();
 

await page.pause();



})
