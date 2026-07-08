import { test, expect } from "playwright/test";

const credentialData = [
    {
        "username": "standard_user",
        "passowrd": "secret_sauce",
        "scenario": "valid username | valid password"
    },
   {
       "username": "standard_user123",
       "passowrd": "secret_sauce",
       "scenario": "invalid username | valid password"

    },
    {
       "username": "standard_user",
       "passowrd": "secret_sauce123",
       "scenario": "valid username | invalid password"


    }
]

credentialData.forEach(data =>{
    test(`To verify login for ${data.scenario}> ${data.username} and ${data.passowrd}`, async ({page}) =>{
       await page.goto('https://www.saucedemo.com/');
       await page.locator('[data-test="username"]').fill(data.username);
      await page.locator('[data-test="username"]').fill(data.passowrd);
       await page.locator('[data-test="login-button"]').click();
    });
       
    })