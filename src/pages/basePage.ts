import { Page, Locator } from '@playwright/test'
import { url } from 'node:inspector';

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }
    async b_waitForElementVisible(element: Locator, maxTimeOut?: number) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: "visible", timeout: maxTimeOut });
        }
        else {
            await element.waitFor({ state: "visible", timeout: maxTimeOut });
        }
    }
    async b_navigateTo(url: string) {
        await this.page.goto(url);

    }
    async b_clickElement(element: Locator) {
        await this.b_waitForElementVisible(element)
        await element.click();
    }
    async b_fillField(element: Locator, text: string) {
        await this.b_waitForElementVisible(element)
        await element.fill(text);
    }
}




