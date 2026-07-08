import { test, expect } from '@playwright/test'

test('Upload File', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const UploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//input[@type="file"]').click()
    ])
    await UploadFile[0].setFiles(['tests/fileToUpload/login-page-chromium-win32.png']);
    await page.waitForTimeout(5000);
})

test('Upload Multiple File', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const UploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//input[@type="file"]').click()
    ])
    await UploadFile[0].setFiles(['tests/fileToUpload/login-page-chromium-win32.png','tests/fileToUpload/credentials-filled-chromium-win32.png']);
    await page.waitForTimeout(5000);
})
test.only('Upload Multiple File Approch 2', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('//input[@type="file"]',['tests/fileToUpload/login-page-chromium-win32.png','tests/fileToUpload/credentials-filled-chromium-win32.png']);
    await page.waitForTimeout(5000);
})