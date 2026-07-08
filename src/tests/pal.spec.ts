/* import { test, expect } from '@playwright/test'
test('To verifiy PAL funcationality', async ({ page }) => {
  await page.goto('https://192.168.70.183/now/login');
  await page.locator('//input[@name="username"]').fill('ev');
  await page.locator('//input[@id="mat-input-1"]').fill('mb');
  await page.locator('//span[@class="mdc-button__label"]').click();
  await page.locator('(//span[@class="nav-menu-text ng-star-inserted"])[6]').click();
  await page.locator('//span[@title="RoyKent"]').click();
  await page.locator('//span[@class="mat-mdc-button-persistent-ripple mdc-fab__ripple"]').click();
  await page.locator('//span[text()="CREATE"]').click();
  await page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]').click();
  await page.locator('(//span[@class="mat-calendar-body-cell-preview"])[3]').click();
  await page.locator('#mat-select-value-17').click();
  await page.locator('(//span[@class="app-text-color"])[3]').click();
  await page.locator('#txtArea').click();
  await page.locator('#txtArea').fill('Testing');
  await page.locator('(//input[@type="text"])[1]').click();
  await page.locator('(//input[@type="text"])[1]').fill('100');
  await page.locator('(//input[@type="text"])[2]').click();
  await page.locator('(//input[@type="text"])[2]').fill('200');
  await page.locator('(//input[@type="text"])[3]').click();
  await page.locator('(//input[@type="text"])[3]').fill('300');
  await page.locator('(//span[@class="mat-mdc-button-touch-target"])[5]').click();
  await page.locator('(//span[@class="mat-calendar-body-cell-content mat-focus-indicator"])[11]').click();
  await page.locator('//span[text(),"Save")').click;
  })
   */

import { test } from '@playwright/test'
import { PCLoginPage } from './pages/pcLoginPage'

test('To verify PAL functionality', async ({ page }) => {

  const loginPage = new PCLoginPage(page);
  const palPage = new PalPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('evergreen', 'mb');

  // PAL Flow
  await palPage.openPALSection();
  await palPage.selectClient();
  await palPage.createPAL();

  await palPage.selectStartDate();
  await palPage.selectDropdownValue();

  await palPage.enterDescription('Testing');

  await palPage.enterAmounts('100', '200', '300');

  await palPage.selectEndDate();

  await palPage.clickSave();
});