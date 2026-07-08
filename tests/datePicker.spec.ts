import { test, expect } from '@playwright/test'

test('date picker with manual entry', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Datepicker.html');
    let date = '04/26/2026';
    await page.locator('//input[@id="datepicker2"]').fill(date);
    await page.pause;

})

test.only('picking the date from the date picker', async ({page}) =>{
 await page.goto('https://demo.automationtesting.in/Datepicker.html');
    let date = '26/12/1993';
    await page.locator('//input[@id="datepicker2"]').fill(date);
    await page.pause;



})
