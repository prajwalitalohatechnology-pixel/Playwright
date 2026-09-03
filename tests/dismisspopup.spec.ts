import {test, expect} from 'playwright/test';

test('To verify dismissed popup', async ({page}) => {
  await page.goto('https://192.168.70.183/now');
  await page.getByRole('textbox', { name: 'Username'}).fill('Evergreen');
  await page.getByRole('textbox', { name: 'Password'}).fill('mb');
  await page.getByRole('button', { name: 'Log in'}).click();
  //await expect(page).toHaveTitle('precisionCare');

  const dismissPopup = async () => {
    const closeButton = page.locator('//span[@class="ng-tns-c2308121496-133"]');

    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  };

  await dismissPopup();

});
