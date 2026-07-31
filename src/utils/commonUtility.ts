import { Page, Locator } from '@playwright/test';

export class CommonUtility {
    constructor(protected page: Page) { }


    async click(locator: Locator) {
        await locator.waitFor({ state: 'visible', timeout: 60000 });
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.waitFor({ state: 'visible', timeout: 60000 });
        await locator.fill(value);
    }

    async waitForSpinner() {
        const spinner = this.page.locator('.container-loader');
        await spinner.waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
    }

    async clickAndWait(locator: Locator) {
        await this.click(locator);
        await this.waitForSpinner();
    }

    async selectDropdown(dropdown: Locator, option: Locator) {
        await this.click(dropdown);
        await this.click(option);
    }

    async selectDate(icon: Locator, day: string) {
        await this.click(icon);
        await this.page.locator(`//span[normalize-space()='${day}']`).click();
    }

    async waitForVisible(locator: Locator) {
        await locator.waitFor({
            state: 'visible',
            timeout: 60000
        });
    }

    async waitForHidden(locator: Locator) {
        await locator.waitFor({
            state: 'hidden',
            timeout: 60000
        });
    }
    async saveRecord(saveButton: Locator) {
        await this.click(saveButton);
        await this.waitForSpinner();
    }

    async selectClient(client: Locator) {
        await this.click(client);
    }

    async createNewRecord(addButton: Locator, createButton: Locator) {
        await this.click(addButton);
        await this.click(createButton);
    }

}
