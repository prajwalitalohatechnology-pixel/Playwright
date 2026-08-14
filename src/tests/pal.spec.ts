import { test } from '@playwright/test'
import { PalPage } from '../pages/PALPage';
import { LoginPage } from '../pages/loginPage';
import { fbaData, palData } from '../utils/testData';
import { FBAPage } from '../pages/FBAPage';
import { loginData } from '../utils/loginData';

test('To verify PAL functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const palPage = new PalPage(page);
  const palRunData = {...palData,description: `Playwright PAL ${Date.now()}`};

  await loginPage.navigate();
  await loginPage.login(loginData.username, loginData.password);

  // PAL Flow
  await palPage.createPAL();
  await palPage.fillPALInformation(palRunData);
  await palPage.createTransactions(palRunData);
});
