import { test, expect } from '@playwright/test';

test('getbyrole', async ({ page }) => {
await page.goto("https://accounts.google.com/");
// await page.getByRole('textbox',{name:'Email or phone'}).fill("RBG");
await page.getByRole('textbox').fill("RBG");

await page.pause();



})
