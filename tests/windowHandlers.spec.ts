import { test, expect } from '@playwright/test'

test('Single tab/window handaling test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('//button[@class="btn btn-info"]')
    ])
    await newTab.waitForLoadState('networkidle');
    await newTab.locator('//span[text()="Documentation"]').click;
    await expect(newTab.locator('//span[text()="Documentation"]')).toHaveText('Documentation');

})