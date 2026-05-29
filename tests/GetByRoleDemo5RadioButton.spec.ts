import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://demo.guru99.com/test/newtours/reservation.php");


await page.getByRole('radio').nth(3).click();




await page.pause();
})