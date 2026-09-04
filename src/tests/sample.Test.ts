import { test, expect } from '@playwright/test';
import path from 'path';

// How do you open a website and verify the page title?

// test('Verify page title', async ({ page }) => {
//   await page.goto('https://example.com');

//   await expect(page).toHaveTitle(/Example Domain/);
// });
//-------------------------------------------------------------------------------

// How do you perform login?

test('To verify login functionality', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveTitle('Swag Labs');
});

//-------------------------------------------------------------------------------
// How do you handle a dynamic dropdown?

// test('Select from dynamic dropdown', async ({page}) =>{
//   await page.goto('https://demo.automationtesting.in/Register.html');
//   await page.getByPlaceholder('Search').fill('john');
//   const option = page.getByText('John Smith',{ exact: true});
//   await expect(option).toBeVisible();
//   await option.click();
// })

// test('Dynamic dropdown with search operation', async ({ page }) => {
// await page.goto('https://demo.automationtesting.in/Register.html');
// await page.locator('//span[@role="combobox"]').click();
// await page.locator('//input[@role="textbox"]').fill('India');
// await page.locator('//li[@role="treeitem"]').click();
//---------------------------------------------------------------------------------
// How do you handle checkbox?

// test('Checkbox operations', async ({page})=> {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   const checkbox = page.getByLabel('Sunday');
//   await checkbox.check();
//   await expect(checkbox).toBeChecked();
//});
//---------------------------------------------------------------------------------
// How do you handle a radio button?
// test('Radio button operations', async ({page})=> {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const radioButton = page.getByLabel('Male');
//     await radioButton.check();
//     await expect(radioButton).toBeChecked();
//   });
//---------------------------------------------------------------------------------
// How do you handle alerts?

//  test('Alert handling', async ({page}) => {
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//   page.on('dialog', async (alert) => {
//     console.log(alert.message());
//     await alert.accept(); 
//   });
//     await page.getByRole('button', { name: 'Click for JS Alert' }).click();
// });

//   test('Alert dismissed', async ({page}) => {
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//   page.on('dialog', async (alert) => {
//     console.log(alert.message());
//     await alert.dismiss();
//   });
//     await page.getByRole('button', { name: 'Click for JS Alert' }).click();
// });

// test('To verify dismissed popup', async ({page}) => {
//   await page.goto('https://192.168.70.183/now');
//   await page.getByRole('textbox', { name: 'Username'}).fill('Evergreen');
//   await page.getByRole('textbox', { name: 'Password'}).fill('mb');
//   await page.getByRole('button', { name: 'Log in'}).click();
//   page.on('dialog', async (alert) => {
//     console.log(alert.message());
//     await alert.dismiss();
//   });
//   await page.getByText('×').click();
// });

//---------------------------------------------------------------------------------

// How do you handle an iframe?

// test('Handle iframe', async ({ page }) => {
//   await page.goto('https://example.com');
//   const frame = page.frameLocator('#payment-frame');
//   await frame.getByLabel('Card Number').fill('4111111111111111');
//   await frame.getByLabel('CVV').fill('123');
//   await frame.getByRole('button', {name: 'Pay'}).click();
// });
//---------------------------------------------------------------------------------

// How do you handle multiple tabs?

// test('Handle multiple tabs', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/windows');
//   const [newPage] = await Promise.all([
//     page.context().waitForEvent('page'),
//     page.getByRole('link', { name: 'Click Here' }).click(),
//   ]);
//   await newPage.waitForLoadState();
//   await expect(newPage).toHaveTitle(/New Window/);
// });
//--------------------------------------------------------------------------------
// How do you handle a popup?

// test('Handle popup', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/popup');
//     const popupPromise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Open Popup' }).click();
//     const popup = await popupPromise;
//     await popup.waitForLoadState();
//     await expect(popup).toHaveURL(/popup/);
//   });

//--------------------------------------------------------------------------------
// How do you upload a single file?
 
// test('Upload a single file', async ({ page }) => {    
//   await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
//   await page.setInputFiles('//input[@type="file"]', 'tests/fileToUpload/login-page-chromium-win32.png');
//   await expect(page.getByText('login-page-chromium-win32.png')).toBeVisible();

// });

// How do you upload multiple files?
test('Upload multiple files', async ({ page }) => {
  const fileDir = path.resolve('tests', 'fileToUpload');

  await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  await page.locator('//input[@type="file"]').setInputFiles([
    path.join(fileDir, 'login-page-chromium-win32.png'),
    path.join(fileDir, 'credentials-filled-chromium-win32.png')
  ]);

  await expect(page.getByText('login-page-chromium-win32.png')).toBeVisible();
  await expect(page.getByText('credentials-filled-chromium-win32.png')).toBeVisible();
});

//--------------------------------------------------------------------------------

  // How do you download a file?
//   test('Download a file', async ({ page }) => {
//     await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/');
//     const [Download] = await Promise.all([
//       page.waitForEvent('download'),
//         page.getByRole('link', { name: 'Download sample pdf file' }).first().click(),
//     ]);

//  expect(Download.suggestedFilename()).toBe('file-sample_150kB.pdf');
});

   
    






