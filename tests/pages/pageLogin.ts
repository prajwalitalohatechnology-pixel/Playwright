/* import { Page, Locator } from '@playwright/test'
import BasePage from './basepage.js';
import { Url } from 'node:url';


export class LoginPage extends BasePage{
    //private page!: Page;
    private readonly usernameTextbox: Locator;
    private readonly passowrdTextbox: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        //this.page = page;
        this.usernameTextbox = page.locator('//input[@id="user-name"]');
        this.passowrdTextbox = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@id="login-button"]');
    }

    async enterusername(usernameText: string) {
        //await this.usernameTextbox.fill(usernameText);
        await this.b_fillField(this.usernameTextbox,usernameText);

    }
    async enterPassword(passowrdText: string) {
        //await this.passowrdTextbox.fill(passowrdText);
        await this.b_fillField(this.passowrdTextbox,passowrdText);
    }
    async clicklogin() {
        //await this.loginButton.click();
        await this.b_clickElement(this.loginButton);

    }
    async hitUrl(url:string){
        await this.b_navigateTo(url);
    }
} */