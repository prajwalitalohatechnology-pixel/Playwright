import {test, expect} from '@playwright/test'

test('Checkbox operations', async ({page})=> {
await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page.locator('//input[@id="sunday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="monday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="wednesday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="thursday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="friday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="saturday"]')).not.toBeChecked();

await page.locator('//input[@id="sunday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).not.toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).not.toBeChecked();

await page.locator('//input[@id="monday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).not.toBeChecked();

await page.locator('//input[@id="tuesday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).toBeChecked();
await expect(page.locator('//input[@id="wednesday"]')).not.toBeChecked();

await page.locator('//input[@id="wednesday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).toBeChecked();
await expect(page.locator('//input[@id="wednesday"]')).toBeChecked();
await expect(page.locator('//input[@id="thursday"]')).not.toBeChecked();

await page.locator('//input[@id="thursday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).toBeChecked();
await expect(page.locator('//input[@id="wednesday"]')).toBeChecked();
await expect(page.locator('//input[@id="thursday"]')).toBeChecked();
await expect(page.locator('//input[@id="friday"]')).not.toBeChecked();

await page.locator('//input[@id="friday"]').check();

await expect(page.locator('//input[@id="sunday"]')).toBeChecked();
await expect(page.locator('//input[@id="monday"]')).toBeChecked();
await expect(page.locator('//input[@id="tuesday"]')).toBeChecked();
await expect(page.locator('//input[@id="wednesday"]')).toBeChecked();
await expect(page.locator('//input[@id="thursday"]')).toBeChecked();
await expect(page.locator('//input[@id="friday"]')).toBeChecked();
await expect(page.locator('//input[@id="saturday"]')).not.toBeChecked();

await page.locator('//input[@id="saturday"]').check();

})

