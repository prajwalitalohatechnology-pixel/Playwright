import { Page, Locator } from '@playwright/test';

export class CommonUtility {
    constructor(protected page: Page) {}

    async click(locator: Locator) {
        await locator.waitFor({
            state: 'visible',
            timeout: 60000
        });
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.waitFor({
            state: 'visible',
            timeout: 60000
        });
        await locator.fill(value);
    }

    async waitForSpinner() {
        const spinner = this.page.locator('.container-loader');
        await spinner.waitFor({
            state: 'hidden',
            timeout: 60000
        }).catch(() => {});
    }

    async clickAndWait(locator: Locator) {
        await this.click(locator);
        await this.waitForSpinner();
    }

    async selectDropdown(locator: Locator, optionText: string) {
        await this.click(locator);
        await this.page
            .getByRole('option', { name: optionText })
            .click();
    }

    async selectDate(calendarIcon: Locator, day: string = '31') {
        await this.click(calendarIcon);
        await this.page
            .locator(`//span[normalize-space()='${day}']`)
            .click();
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
}

