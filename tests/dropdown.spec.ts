import { test, expect } from '@playwright/test'

test('Static dropdown operation', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('//select[@id="Skills"]', { value: 'Android' });
    await page.selectOption('//select[@id="Skills"]', { label: 'APIs' });
    await page.selectOption('//select[@id="Skills"]', { index: 8 });
    await page.pause();
})

test('Multiselect dropdown operation', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
    await page.selectOption('//select[@id="cars"]', [
        { value: 'volvo' }, { label: 'Opel' }, { index: 1 }])
})

test('Dynamic dropdown with search operation', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//span[@role="combobox"]').click();
    await page.locator('//input[@role="textbox"]').fill('India');
    await page.locator('//li[@role="treeitem"]').click();
})

test('Dynamic dropdown without search operation', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//span[@role="combobox"]').click();
    //await page.locator('//input[@role="textbox"]').fill('India');
    await page.locator('//span[@id="select2-country-container"]').locator('li', { hasText: 'India' }).click();
    //await page.getByText('India', { exact: true }).click();
})

test.only('Multiselect dropdown operation part2', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
    await page.locator('//input[@id="react-select-4-input"]').click();
    await page.locator('#react-select-4-option-0').click();
    await page.locator('#react-select-4-option-1').click();
    await page.locator('#react-select-4-option-3').click();
    await page.locator('.css-15lsz6c-indicatorContainer > .css-8mmkcg').first().click();
})