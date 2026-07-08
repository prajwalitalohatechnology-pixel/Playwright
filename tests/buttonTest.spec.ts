import {test, expect} from '@playwright/test' 

test.only('Click action on the button with left click', async ({page}) => { 
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await page.locator('//div[@id="click_area"]').click(); //default is left key
await expect (page.locator('//span[@id="click_type"]')).toHaveText('Click');
})

test('Click action on the button with right click', async ({page}) => { 
await page.locator('//div[@id="click_area"]').click({button:'right'}); //explecitly mentioting the right key
await expect (page.locator('//span[@id="click_type"]')).toHaveText('Right-Click');

//await page.locator('//div[@id="click_area"]').click({button:'left'}); //explecitly mentioting the left key
//await expect (page.locator('//span[@id="click_type"]')).toHaveText('Click');
})

test.only('Double click action on button', async ({page}) => { 
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await page.locator('//div[@id="click_area"]').dblclick(); //double click on element
await expect (page.locator('//span[@id="click_type"]')).toHaveText('Double-Click');
})


