import { test, expect } from '@playwright/test';

test('table test', async ({ page }) => {
await page.goto("http://only-testing-blog.blogspot.com/2013/09/test.html");


let WebElement = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[1]");

let tabletd = await WebElement.textContent();
console.log(tabletd);
let rows = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr");
let rowscount = await rows.count();
console.log("rowscount: " + rowscount);

let columns = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td");
let columnscount = await columns.count();
console.log("columns Count : " +columnscount);

for(let i:number=1;i<=rowscount;i++)
{
    for(let j=1;j<=columnscount;j++)
    {
        console.log("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr["+i+"]/td["+j+"]");
        let WebElement = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr["+i+"]/td["+j+"]");

        let tabletd = await WebElement.textContent();
        console.log(tabletd);
    }
}







//await page.pause();
})