import { test, expect } from '@playwright/test'

test('Radio button operation', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect(page.locator('//input[@value="Male"]')).not.toBeChecked();
    await expect(page.locator('//input[@value="FeMale"]')).not.toBeChecked();
    await page.locator('//input[@value="Male"]').check(); //Ensure radio button is checked
    await page.locator('//input[@value="FeMale"]').check(); //Ensure radio button is checked

    // Assertions part 1
    await page.locator('//input[@value="Male"]').check(); //check();
    await expect(page.locator('//input[@value="Male"]')).toBeChecked();
    await expect(page.locator('//input[@value="FeMale"]')).not.toBeChecked();

    // Assertions part 2
    await page.locator('//input[@value="FeMale"]').check(); // Ensure radio button is checked
    await expect(page.locator('//input[@value="FeMale"]').isChecked()).toBeTruthy();
    await expect(page.locator('//input[@value="Male"]').isChecked()).toBeFalsy();
 
})
//------------------------------------------------------------------------------------------------------------------