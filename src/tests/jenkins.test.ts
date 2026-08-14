import { test, expect } from '@playwright/test';

test('Google title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
  await page.locator('textarea[name="q"]').fill('Search');
  await page.locator('textarea[name="q"]').press('Enter');
  await page.waitForNavigation();
  await expect(page).toHaveTitle(/Search - Google/);

});