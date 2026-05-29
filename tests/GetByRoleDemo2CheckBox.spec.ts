import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://www.calculator.net/mortgage-calculator.html");

// await page.getByRole('checkbox',{checked:true}).uncheck;

await page.getByRole('checkbox').uncheck();

await page.pause();
})