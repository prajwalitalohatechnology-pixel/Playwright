import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/pageLogin.js'
import myMasterData from './testData/credentials.json' with { type: 'json' };

test('Verify login funcationality', async ({ page }) => {
    //await page.goto('https://www.saucedemo.com/');
    await page.pause;
    const obj_loginPage = new LoginPage(page);
    await obj_loginPage.hitUrl('https://www.saucedemo.com/');
    await obj_loginPage.enterusername('standard_user');
    await obj_loginPage.enterPassword('secret_sauce');
    await obj_loginPage.clicklogin();
    await expect(page.locator('//span[text()="Products"]')).toBeVisible();
})

test('Verify login funcationality with lockedout credential', async ({ page }) => {
    //await page.goto('https://www.saucedemo.com/');
    await page.pause();

    const obj_loginPage = new LoginPage(page);
    obj_loginPage.hitUrl('https://www.saucedemo.com/');
    await obj_loginPage.enterusername(myMasterData.lockedoutUsername);
    await obj_loginPage.enterPassword(myMasterData.locakedoutPassword);
    await obj_loginPage.clicklogin();
    await expect(page.locator('//span[text()="Products"]')).toBeVisible();
})

