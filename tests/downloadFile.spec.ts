import { test, expect } from '@playwright/test'

test('download a File', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    await page.locator('//textarea[@id="textbox"]').click();
    await page.locator('//textarea[@id="textbox"]').pressSequentially('Welcome to playwright sessions');
    await page.locator('//button[@id="createTxt"]').click(); // click on the generatefile button
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[@id="link-to-download"]').click()
    ])

    const path = await download[0].path();
    const fileName = "Playwright_Download_File";
    await download[0].saveAs(`./tests/downloadedFiles/${fileName}.txt`);
})