import { test, expect } from '@playwright/test';

test('Locators test', async ({ page }) => {
await page.goto("https://gmail.com");
page.getByText("Sign in");
console.log("Done");
//await page.locator('/html/body/div[2]/div[1]/div[1]/div[2]/c-wiz/main/div[2]/div/div/div[1]/span/section/div/div/div[1]/div[1]/div[1]/div/div[1]/input').fill('rbg@gmail.com');

//await page.locator("input[id='identifierId']").fill('rbg@gmail.com');
//await page.locator("input[id='identifierId'][name='identifier']").fill('rbg@gmail.com');
//await page.locator("#identifierId").fill('rbg@gmail.com');
//await page.locator("input#identifierId").fill('rbg@gmail.com');
//await page.locator(".whsOnd.zHQkBf").nth(0).fill('rbg@gmail.com');
//await page.locator("input[id^='identif']").fill('rbg@gmail.com');
await page.locator("input[id*='tifier']").fill('rbg@gmail.com');
await page.pause();
})