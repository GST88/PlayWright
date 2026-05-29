import { test, expect } from '@playwright/test';

test('mouse', async ({ page }) => {
await page.goto("https://jqueryui.com/slider/");

let iframe1 = await page.frameLocator("//iframe[@class='demo-frame']");

let draggableone = await iframe1.locator("//div[@id='slider']/span");
//let boxslide = iframe1.locator("//div[@id='slider']")
 let box = await draggableone.boundingBox();
    if (box) {

        // Move mouse to center of slider handle
        await page.mouse.move(
            box.x + box.width / 2,
            box.y + box.height / 2
        );

        // Hold mouse
        await page.mouse.down();
        // Drag horizontally
        await page.mouse.move(
            box.x + 200,
            box.y
        );

        // Release mouse
        await page.mouse.up();
    }

    await page.waitForTimeout(4000);

  


await page.pause();



})
