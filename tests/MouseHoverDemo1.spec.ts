import { test, expect } from '@playwright/test';

test('mouse', async ({ page }) => {
await page.goto("https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers");


let clickme = await page.locator("//span[@class='icp-nav-flag icp-nav-flag-in icp-nav-flag-lop']");
await clickme.hover();
  
// let hoverlink = await page.locator("//a[@href='/customer-preferences/country?ref_=icp_lop_mop_chg&preferencesReturnUrl=/']");
// await hoverlink.click();

await page.pause();



})
