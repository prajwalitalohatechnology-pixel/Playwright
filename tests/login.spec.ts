import {test, expect} from '@playwright/test' 

test('To verifiy login funcationality', async ({page}) =>{ 
    await page.goto('https://www.saucedemo.com/'); 
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
})


// npx playwright test tests/login.spec.ts --project=chromium


