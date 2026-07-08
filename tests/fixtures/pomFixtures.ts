import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pages/pageLogin.js'
import { InventoryPage } from '../pages/inventoryPage.js'


type pages = {
    obj_loginPage: LoginPage;
    obj_inventoryPage: InventoryPage;

}

const testPages = baseTest.extend<pages>({
    obj_loginPage: async ({page}, use)=> {
        await use(new LoginPage(page));
    },

    obj_inventoryPage: async ({page}, use)=> {
        await use(new InventoryPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;