import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    // Locators
    username = '//input[@name="username"]';
    password = '//input[@id="mat-input-1"]';
    loginButton = '//span[@class="mdc-button__label"]';

    // Methods
    async navigate() {
        await this.page.goto('https://192.168.70.183/now/login');
    }

    async login(user: string, pass: string) {
        await this.page.locator(this.username).fill(user);
        await this.page.locator(this.password).fill(pass);
        await this.page.locator(this.loginButton).click();
    }
}