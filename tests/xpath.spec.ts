import {test, expect} from '@playwright/test' 

test('To verifiy login funcationality', async ({page}) =>{ 
    await page.goto('https://www.saucedemo.com/'); 
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click();
//remove//preceding-sibling::div[2]

    await expect(page.locator("//div[@class='inventory_item_name']")).toHaveText('Sauce Labs Backpack');
})


