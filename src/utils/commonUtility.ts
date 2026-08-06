import { Page, Locator } from '@playwright/test';

export class CommonUtility {
    constructor(protected page: Page) { }

    async click(locator: Locator, force = false) {
        await locator.waitFor({ state: 'visible', timeout: 60000 });
        await locator.click({ force });
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
    /**
   * Select a random date from today onward in the currently displayed month.
   * dateIconLocator - Locator for the calendar icon/input that opens the date picker.
   */
    async selectRandomFutureDate(dateIconLocator: Locator): Promise<number> {
        // Open the date picker
        await dateIconLocator.click();

        // Find all enabled dates in the current month
        const enabledDates = this.page.locator(
            '//td[contains(@class,"mat-calendar-body-cell") and not(contains(@class,"mat-calendar-body-disabled"))]//span[contains(@class,"mat-calendar-body-cell-content")]'
        );
        const count = await enabledDates.count();
        if (count === 0) {
            throw new Error('No enabled dates found in the date picker.');
        }
        const today = new Date().getDate();
        const futureIndexes: number[] = [];
        for (let i = 0; i < count; i++) {
            const text = (await enabledDates.nth(i).textContent())?.trim() || '';
            const day = Number(text);
            if (!Number.isNaN(day) && day >= today) {
                futureIndexes.push(i);
            }
        }
        if (futureIndexes.length === 0) {
            throw new Error('No future dates available in the current month.');
        }
        const randomIndex = futureIndexes[Math.floor(Math.random() * futureIndexes.length)];
        if (randomIndex === undefined) {
            throw new Error('Unable to choose a future date from the calendar.');
        }
        const selectedDay = Number(
            (await enabledDates.nth(randomIndex).textContent())?.trim()
        );
        await enabledDates.nth(randomIndex).click();
        return selectedDay;
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
    // =========================
    // Dropdown Utility
    // =========================
    /**
   * Select a random option from a dropdown.
   * @param dropdown - Locator of the dropdown.
   * @param options - Locator of all dropdown options.
   * @returns Selected option text.
   */
    async selectRandomOption(
        dropdown: Locator,
        options: Locator
    ): Promise<string> {
        await dropdown.click();

        await options.first().waitFor({
            state: 'visible',
            timeout: 10000
        });

        const count = await options.count();
        const randomIndex = Math.floor(Math.random() * count);

        const option = options.nth(randomIndex);
        const selectedText = (await option.textContent())?.trim() || '';

        await option.click();

        return selectedText;
    }
    async selectOptionByText(
        dropdown: Locator,
        optionText: string
    ) {
        await dropdown.click();

        await this.page
            .locator(`//mat-option//span[normalize-space()="${optionText}"]`)
            .click();
    }
}