import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://demo.guru99.com/test/newtours/reservation.php");

await page.waitForTimeout(1000);
await page.getByRole('combobox').nth(2).selectOption('3');


await page.pause();
})