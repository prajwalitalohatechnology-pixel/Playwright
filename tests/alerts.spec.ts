import { test, expect } from '@playwright/test'

// test('Simple alert', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//     page.on('dialog', async (alert) => {
//         const alertmessage = alert.message();
//         expect(alertmessage).toEqual('I am a JS Alert');
//         await alert.accept();
//     })

//     await page.locator('//button[@onclick="jsAlert()"]').click();
//     await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
// })

// test('comfirmation alert test', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//     page.on('dialog', async (alert) => {
//         const alertmessage = alert.message();
//         expect(alertmessage).toEqual('I am a JS Confirm');
//         //await alert.accept();
//         await alert.dismiss();
//     })
//     await page.locator('//button[@onclick="jsConfirm()"]').click();
//     //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
//     await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
// })

// test.only('prompt alert test', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//     page.on('dialog', async (alert) => {
//         const alertmessage = alert.message();
//         expect(alertmessage).toEqual('I am a JS prompt');
//         await alert.accept('Testing');
//     })
//     await page.locator('//button[@onclick="jsPrompt()"]').click();
//     await expect(page.locator('#result')).toHaveText('You entered: Testing');
    
// })

test.only('dynamic alert test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    const message = 'Prompt message';

    page.on('dialog', async (alert) => {
        const alertmessage = alert.message();
        expect(alertmessage).toEqual('I am a JS prompt');
        await alert.accept(message);
    })
    await page.locator('//button[@onclick="jsPrompt()"]').click();
    const message1 = await page.locator('#result').textContent();
    await expect(page.locator('#result')).toHaveText(`You entered: ${message}`);
    
})
