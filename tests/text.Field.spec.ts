import { test, expect } from 'playwright/test'

test('text field with fill method', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

})
//-------------------------------------------------------------------------

test('text field with sequential method', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@id="user-name"]').pressSequentially('standard_user');
    await page.locator('//input[@id="password"]').pressSequentially('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

})
//------------------------------------------------------------------------------------------

test('text field with sequential method with delay', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@id="user-name"]').pressSequentially("standard_user", {delay:300});
    await page.locator('//input[@id="password"]').pressSequentially("secret_sauce", {delay:300});
    await page.locator('//input[@id="login-button"]').click();

})

