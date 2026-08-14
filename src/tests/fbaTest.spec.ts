import { test } from '@playwright/test';
import { loginData } from '../utils/loginData';
import { LoginPage } from '../pages/loginPage';
import { FBAPage } from '../pages/FBAPage';
import { fbaData } from '../utils/testData';


//Test Case 1: Lunch application and login
test('Verify login functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const fbaPage = new FBAPage(page);

    await loginPage.navigate();
    await loginPage.login(loginData.username, loginData.password);
    
    // FBA Flow
  await fbaPage.openFBA();
  await fbaPage.fillGeneralInformation(fbaData);
  await fbaPage.fillBehavior(fbaData);
});