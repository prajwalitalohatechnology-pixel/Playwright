import { test, expect } from '@playwright/test'

// test('To be visible/To be hidden', async ({page}) =>{ 
//     await page.goto('https://www.saucedemo.com/'); 
//     await page.locator('//input[@id="user-name"]').fill('standard_user');
//     await page.locator('//input[@id="password"]').fill('secret_sauce');
//     await page.locator('//input[@id="login-button"]').click();
//     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
//     await page.locator('//button[@name="add-to-cart-sauce-labs-backpack"]').click;
//     await expect(page.locator('//button[@id="remove-sauce-labs-backpack"]')).toBeHidden();
// })
// //---------------------------------------------------------------------------------------------------

// test('To Have Text/Not To have Text', async ({page}) =>{ 
//     await page.goto('https://www.saucedemo.com/'); 
//     await page.locator('//input[@id="user-name"]').fill('problem_user');
//     await page.locator('//input[@id="password"]').fill('secret_sauce');
//     await page.locator('//input[@id="login-button"]').click();
//     await expect(page.locator("//span[text()='Products']")).toHaveText('Products');
//     await expect(page.locator("//span[text()='Products']")).not.toHaveText('Prajwalit');
// })
// //----------------------------------------------------------------------------------------------------------

// test('To Have Count', async ({page}) =>{ 
//     await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
//     await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(0);
//     await page.locator('//button[@onclick="addElement()"]').click();
//     await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(1);
// })

// //--------------------------------------------------------------------------------------------------------------

// test('To Have Title', async ({page}) =>{ 
//     await page.goto('https://www.saucedemo.com/'); 
//     await page.locator('//input[@id="user-name"]').fill('performance_glitch_user');
//     await page.locator('//input[@id="password"]').fill('secret_sauce');
//     await page.locator('//input[@id="login-button"]').click();
//     await expect(page).toHaveTitle('Swag Labs');

// })
// //-----------------------------------------------------------------------------------------------------------------

// test('To Have URL', async ({page}) =>{ 
//     await page.goto('https://www.saucedemo.com/'); 
//     await page.locator('//input[@id="user-name"]').fill('error_user');
//     await page.locator('//input[@id="password"]').fill('secret_sauce');
//     await page.locator('//input[@id="login-button"]').click();
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// })
// //--------------------------------------------------------------------------------------------------------------------

// test('To Contain Text()', async ({page}) =>{ 
//     await page.goto('https://www.saucedemo.com/'); 
//     await page.locator('//input[@id="user-name"]').fill('visual_user');
//     await page.locator('//input[@id="password"]').fill('secret_sauce');
//     await page.locator('//input[@id="login-button"]').click();
//     await expect(page.locator("//div[text()='Swag Labs']")).toContainText(['Swag Labs']);
// })

//------------------------------------------------------------------------------------------------------------

//Loops 
/* 
test ('To check have count in loops', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
   
     // Add elements
    for (let i = 1; i <= 5; i++) {
        await page.locator('//button[@onclick="addElement()"]').click();
    }
    await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(5);

    // Remove elements one by one
    for (let i = 5; i > 0; i--) {
        await (page.locator('//button[@onclick="deleteElement()"]')).first().click();
        await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(i - 1);
    }
 })
 */
//---------------------------------------------------------------------------------------

//  test ('To Have Screenshot', async ({page}) => {
//  await page.goto('https://www.saucedemo.com/');
//  //await page.locator('//input[@id="user-names"]').fill('visual_user');
//  await expect(page).not.toHaveScreenshot();
//  })

//  test('To Have Screenshot', async ({ page }) => {
//    await page.goto('https://www.saucedemo.com/');
//    await page.locator('//input[@id="user-name"]').fill('visual_user');
//   await expect(page).not.toHaveScreenshot();
// })

// test('Multiple screenshots example', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   // Screenshot 1 - initial page
//   await expect(page).toHaveScreenshot('login-page.png');
//   // Perform action
//   await page.locator('//input[@id="user-name"]').fill('visual_user');
//   // Screenshot 2 - after username entered
//   await expect(page).toHaveScreenshot('username-filled.png');
//   // Perform another action
//   await page.locator('//input[@id="password"]').fill('secret_sauce');
//   // Screenshot 3 - after password entered
//   await expect(page).toHaveScreenshot('credentials-filled.png');
// })

//-----------------------------------------------------------------------------------------

/* test('To check decrementing delete count', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    const addBtn = page.locator('//button[@onclick="addElement()"]');
    const deleteBtn = page.locator('//button[@onclick="deleteElement()"]');

    // Add elements
    for (let i = 1; i <= 5; i++) {
        await addBtn.click();
    }

    // Verify initial count
    let count = await deleteBtn.count();
    console.log(`Initial count: ${count}`);

    // Remove elements one by one
    while (count > 0) {
        await deleteBtn.first().click();
        count = await deleteBtn.count();

        console.log(`Remaining count: ${count}`);
        await expect(deleteBtn).toHaveCount(count);
    }
    // Final validation (last row / no elements left)
    console.log('All elements deleted. Final count: 0');
    await expect(deleteBtn).toHaveCount(0);
}); */
//----------------------------------------------------------------------------------------------

test('To have attribute', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.locator('(//a[@data-parent="#accordian"])[1]').click();  
    await page.locator('(//a[@data-parent="#accordian"])[1]').click();  
    await expect(page.locator('//a[@data-parent="#accordian"])[1]')).toHaveAttribute('class="collapsed"');
})