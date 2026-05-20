import { test, expect } from '@playwright/test';

test('table test', async ({ page }) => {
await page.goto("http://only-testing-blog.blogspot.com/2015/01/iframe1.html");

let iframe1 = await page.frameLocator("//iframe[@id='frame1']");
let framecontent = await iframe1.locator("//*[@id='Blog1']/div[1]/div/h2/span");
let textis = await framecontent.textContent();
console.log("iframe text is : " + textis);

let pagecontent = await page.locator("//*[@id='Blog1']/div[1]/div/h2/span");
let pagetextis = await pagecontent.textContent();
console.log("page text is : " + pagetextis);


// let WebElement = await page.locator("//*[@id='Blog1']/div[1]/div/h2/span").nth(2);
// let textis = await WebElement.textContent();
// console.log(textis);







//await page.pause();
})