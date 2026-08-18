import { test } from '@playwright/test'
import { PalPage } from '../pages/PALPage';
import { LoginPage } from '../pages/loginPage';
import { palData } from '../utils/testData';
import { loginData } from '../utils/loginData';
import { CommonUtility } from '../utils/commonUtility'; 

test('To verify PAL functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const palPage = new PalPage(page);
  const palRunData = { ...palData, description: `Playwright PAL ${Date.now()}` };
  const commonUtility = new CommonUtility(page);

  // Login to PrecisionCare.
  await loginPage.navigate();
  await loginPage.login(loginData.username, loginData.password);

  // Dismiss any leftover toaster messages from login.
  await commonUtility.closeAllToastMessages();
  await palPage.btnToasterMessageClose.click({ timeout: 3000 }).catch(() => { });
  await palPage.btnToasterMessageClose.waitFor({ state: "hidden" }).catch(() => { });

  // Create a PAL record and its transaction.
  await palPage.createPAL();
  await palPage.fillPALInformation(palRunData);
  await palPage.createTransactions(palRunData);
});
