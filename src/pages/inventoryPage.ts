import { Page, Locator } from '@playwright/test'
import BasePage from './basepage';

export class InventoryPage extends BasePage{

    private readonly removeButton: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        super(page);

        this.removeButton = page.locator('#removeButton');
        this.passwordTextbox = page.locator('#passoword');
        this.loginButton = page.locator('#login-button');
    }
async cliclRemoveButton(element:Locator){
    this.b_clickElement(element);
}
}