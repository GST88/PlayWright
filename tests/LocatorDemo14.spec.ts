import { test, expect } from '@playwright/test';

test(' test', async ({ page }) => {
await page.goto("https://www.meghanabus.in/index.html");

let managebooking = await page.locator("//a[@title='Manage Bookings']");
await managebooking.click();

let Searchclick = await page.locator("//button[@type='submit']");
await Searchclick.click();
console.log("button is clicked");

let textis = await page.locator("//span[text()='Please enter the details for Print, Update, Cancel and Pre/Postpone Ticket.']");
let textis1 = await textis.textContent();
console.log("text is : " + textis1 );



await page.pause();
})