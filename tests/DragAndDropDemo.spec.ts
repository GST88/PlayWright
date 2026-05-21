import { test, expect } from '@playwright/test';

test('mouse', async ({ page }) => {
await page.goto("https://jqueryui.com/droppable/");

let iframe1 = await page.frameLocator("//iframe[@class='demo-frame']");

let draggableone = await iframe1.locator("//div[@id='draggable']");
let droppinglocation = await iframe1.locator("//div[@id='droppable']");

// await iframe1.dragAndDrop('draggableone','droppinglocation');
await draggableone.dragTo(droppinglocation);
await page.waitForTimeout(4000);
  
// let hoverlink = await page.locator("//a[@href='/customer-preferences/country?ref_=icp_lop_mop_chg&preferencesReturnUrl=/']");
// await hoverlink.click();

await page.pause();



})
