import { test, expect } from '@playwright/test';

test('Label test', async ({ page }) => {
await page.goto("https://faculty.washington.edu/chudler/java/boxes.html");



await page.getByRole('checkbox').nth(2).click();

await page.pause();
})