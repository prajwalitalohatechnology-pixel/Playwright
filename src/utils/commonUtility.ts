import { Page, Locator } from '@playwright/test';

export class CommonUtility {
    constructor(protected page: Page) { }

    // Safe click (avoids strict mode issues)
    async click(locator: Locator, force = false) {
        const element = locator.first();
        await element.waitFor({ state: 'visible', timeout: 60000 });
        await element.click({ force });

    }

    // Safe fill
    async fill(locator: Locator, value: string) {
        const element = locator.first();
        await element.waitFor({ state: 'visible', timeout: 60000 });
        await element.fill(value);
    }

    async waitForSpinner() {
        const spinner = this.page.locator('.container-loader');
        await spinner.waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
    }

    async clickAndWait(locator: Locator) {
        await this.click(locator);
        await this.waitForSpinner();
    }

    async waitForUIToBeReady() {
    // Wait for spinner
    await this.page.locator('.container-loader')
        .waitFor({ state: 'hidden', timeout: 60000 })
        .catch(() => {});

    // Wait for toast notification
    await this.page.locator('.ngx-toastr')
        .waitFor({ state: 'hidden', timeout: 10000 })
        .catch(() => {});

    // Wait for Angular overlay
    await this.page.locator('.cdk-overlay-backdrop-showing')
        .waitFor({ state: 'hidden', timeout: 10000 })
        .catch(() => {});

    }
    async selectRandomFutureDate(dateIconLocator: Locator): Promise<number> {
    // Wait for any toast notification to disappear
    const toast = this.page.locator('.ngx-toastr');

    if (await toast.count() > 0) {
        await toast.first().waitFor({
            state: 'hidden',
            timeout: 10000
        }).catch(() => {});
    }

    // Wait for any overlay backdrop to disappear
    const backdrop = this.page.locator('.cdk-overlay-backdrop-showing');

    if (await backdrop.count() > 0) {
        await backdrop.first().waitFor({
            state: 'hidden',
            timeout: 10000
        }).catch(() => {});
    }

    // Now click the calendar
    await dateIconLocator.waitFor({
        state: 'visible',
        timeout: 60000
    });

    await dateIconLocator.click();

    // Continue with date selection...
    const enabledDates = this.page.locator(
        '//td[contains(@class,"mat-calendar-body-cell") and not(contains(@class,"mat-calendar-body-disabled"))]//span[contains(@class,"mat-calendar-body-cell-content")]'
    );

    await enabledDates.first().waitFor({
        state: 'visible',
        timeout: 10000
    });

    const count = await enabledDates.count();

    const today = new Date().getDate();
    const futureIndexes: number[] = [];

    for (let i = 0; i < count; i++) {
        const text = (await enabledDates.nth(i).textContent())?.trim() || '';
        const day = Number(text);

        if (!Number.isNaN(day) && day >= today) {
            futureIndexes.push(i);
        }
    }

    const randomIndex =
        futureIndexes[Math.floor(Math.random() * futureIndexes.length)];

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
    // Angular Material Dropdown Utilities
    // =========================

    /**
     * Select an option from Angular Material dropdown by visible text.
     */
   async selectMatOption(dropdown: Locator, optionText: string): Promise<void> {
    // Close any existing overlay first
    const backdrop = this.page.locator('.cdk-overlay-backdrop-showing');

    if (await backdrop.count() > 0) {
        await this.page.keyboard.press('Escape');
        await backdrop.first().waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }

    await dropdown.waitFor({ state: 'visible', timeout: 60000 });
    await dropdown.click();

    const option = this.page
        .locator('mat-option')
        .filter({ hasText: optionText });

    await option.first().waitFor({ state: 'visible', timeout: 10000 });
    await option.first().click();
}

    /**
     * Select a random option from Angular Material dropdown.
     * Returns the selected option text.
     */
    async selectRandomOption(dropdown: Locator): Promise<string> {
        await dropdown.waitFor({ state: 'visible', timeout: 60000 });
        await dropdown.click();
        const options = this.page.locator('mat-option');
        await options.first().waitFor({ state: 'visible', timeout: 10000 });
        const count = await options.count();
        if (count === 0) {
            throw new Error('No dropdown options found');
        }
        const randomIndex = Math.floor(Math.random() * count);
        const option = options.nth(randomIndex);
        const selectedText = (await option.textContent())?.trim() || '';
        await option.click();
        return selectedText;

    }
        async waitForOverlayToClose() {
    const backdrop = this.page.locator('.cdk-overlay-backdrop-showing');

    if (await backdrop.count() > 0) {
        await backdrop.first().waitFor({
            state: 'hidden',
            timeout: 10000
        }).catch(() => {});
    }
}
    }




