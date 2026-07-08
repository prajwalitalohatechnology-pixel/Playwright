import { test } from '@playwright/test';
import { loginData } from '../utils/loginData';
import { LoginPage } from '../pages/loginPage';
import { FBAPage } from '../pages/FBAPage';

//Test Case 1: Lunch application and login
test('Verify login functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const fbaPage = new FBAPage(page);

    await loginPage.navigate();
    await loginPage.login(loginData.username, loginData.password);
    // close any post-login toast message, if present
   await 

    // FBA Flow
  await fbaPage.openBehaviorSupportMenu();
  await fbaPage.openFBASection();
  await fbaPage.selectClient();
  await fbaPage.createFBA();
  await fbaPage.enterMFConsumerSatisfactionLevel('Testing1');
  await fbaPage.enterMFHealthandSafetyConcerns('Testing2');
  await fbaPage.enterMFSignificantChangesorEvents('Testing3');
  await fbaPage.clickSave();

});
