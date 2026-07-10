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
    
    // FBA Flow
  await fbaPage.openBehaviorSupportMenu();
  await fbaPage.openFBASection();
  await fbaPage.selectClient();
  await fbaPage.createFBA();
  await fbaPage.enterMFConsumerSatisfactionLevel('Testing1');
  await fbaPage.enterMFHealthandSafetyConcerns('Testing2');
  await fbaPage.enterMFSignificantChangesorEvents('Testing3');
  await fbaPage.clickSave();
  await fbaPage.clickBehaviors();
  await fbaPage.clickAddNew();
  await fbaPage.selectStartDate();
  await fbaPage.selectAddressedinBSP();
  await fbaPage.enterTargetBehavior('Testing Target Behavior');
  await fbaPage.enterReplacementActivities('Testing Replacement Activities');
  await fbaPage.enterInterventions('Testing Interventions');
  await fbaPage.enterTempBSPTargetBehavior('Testing Temp BSP Target Behavior');
  await fbaPage.clickReplacementBehaviorAddNew();
  await fbaPage.enterReplacementBehavior('Testing Replacement Behavior');
  await fbaPage.clickReplacementBehaviorSave();
  await fbaPage.clickReinforcementBehaviorAddNew();
  await fbaPage.enterReinforcementBehavior('Testing Reinforcement Behavior');
  await fbaPage.clickReinforcementBehaviorSave();
  await fbaPage.clickTargetBehaviorSave();

});
