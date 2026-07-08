//import { test, expect } from '@playwright/test'
import { test, expect } from './fixtures/pomFixtures.js'
import myMasterData from './testData/credentials.json' with { type: 'json' };

test('Verify login funcationality with valid credentials', async ({ page,obj_loginPage})=> {
    //await page.goto('https://www.saucedemo.com/');
    await page.pause;
    await obj_loginPage.hitUrl('https://www.saucedemo.com/');
    await obj_loginPage.enterusername(myMasterData.validUsername);
    await obj_loginPage.enterPassword(myMasterData.validPassword);
    await obj_loginPage.clicklogin();
    await expect(page.locator('//span[text()="Products"]')).toBeVisible();
})

test('Verify add product to cart funcationality', async ({ page,obj_loginPage,obj_inventoryPage }) => {
    //await page.goto('https://www.saucedemo.com/');
    await page.pause();
    obj_loginPage.hitUrl('https://www.saucedemo.com/');
    await obj_loginPage.enterusername(myMasterData.validUsername);
    await obj_loginPage.enterPassword(myMasterData.validPassword);
    await obj_loginPage.clicklogin();
    //await obj_inventoryPage.clickAddToCart();
})

