import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://www.meghanabus.in/manage-bookings.html");

await page.getByRole('button',{name:'Search'}).click();

await page.pause();
})