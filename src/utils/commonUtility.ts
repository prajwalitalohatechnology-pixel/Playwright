import { expect, Page, Locator } from '@playwright/test';

export class CommonUtility {
    constructor(protected page: Page) { }

    async click(locator: Locator, force = false) {
        await locator.click({ force });
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async waitForSpinner() {
        await expect(this.page.locator('.container-loader:visible')).toHaveCount(0, {
            timeout: 60000
        });
    }

    async clickAndWait(locator: Locator) {
        await this.click(locator);
        await this.waitForSpinner();
    }
    async selectRandomFutureDate(dateIconLocator: Locator, minimumOffset = 0): Promise<number> {
        try {
            await this.waitForUIToBeReady();
        } catch (error) {
            // UI not ready, continue anyway
        }

        try {
            await dateIconLocator.first().click();
        } catch (error) {
            if (error instanceof Error && error.message.includes('Target page, context or browser has been closed')) {
                throw error;
            }
            // Retry once
            await dateIconLocator.first().click();
        }

        // Wait longer for calendar to appear and render
        await this.page.waitForTimeout(1000);

        // Try multiple selectors for calendar dates
        let dates = this.page.locator('td.mat-calendar-body-cell:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content');
        let count = await dates.count();

        // If the first selector doesn't work, try alternate selectors
        if (count === 0) {
            dates = this.page.locator('.mat-calendar-body-cell-content');
            count = await dates.count();
        }

        if (count === 0) {
            dates = this.page.locator('button.mat-calendar-body-cell');
            count = await dates.count();
        }

        if (count === 0) {
            throw new Error('No dates found in calendar picker');
        }

        try {
            await dates.first().waitFor({
                state: 'visible',
                timeout: 5000
            });
        } catch (error) {
            if (error instanceof Error && error.message.includes('Target page, context or browser has been closed')) {
                throw error;
            }
        }

        const today = new Date().getDate();
        let selectedIndex = 0;
        let hasValidDate = false;

        // First try to find a future date
        for (let i = 0; i < count; i++) {
            try {
                const dayText = (await dates.nth(i).textContent())?.trim();
                const day = Number(dayText);

                if (!Number.isNaN(day) && day > 0 && day <= 31) {
                    if (day >= today + minimumOffset) {
                        selectedIndex = i;
                        hasValidDate = true;
                        break;
                    }
                }
            } catch (e) {
                // Skip this element if we can't read it
            }
        }

        // If no future date found, pick first valid date
        if (!hasValidDate) {
            for (let i = 0; i < count; i++) {
                try {
                    const dayText = (await dates.nth(i).textContent())?.trim();
                    const day = Number(dayText);

                    if (!Number.isNaN(day) && day > 0 && day <= 31) {
                        selectedIndex = i;
                        hasValidDate = true;
                        break;
                    }
                } catch (e) {
                    // Skip this element
                }
            }
        }

        if (!hasValidDate) {
            // Just pick a random date
            selectedIndex = Math.floor(Math.random() * count);
        }

        const selectedDay = Number(
            (await dates.nth(selectedIndex).textContent())?.trim()
        );

        await dates.nth(selectedIndex).click();

        try {
            await this.waitForUIToBeReady();
        } catch (error) {
            // UI may not be ready, continue
        }

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
    /**
     * Select an option from Angular Material dropdown by visible text.
     */
    async selectMatOption(dropdown: Locator, optionText: string): Promise<void> {
        await this.waitForUIToBeReady();

        await dropdown.first().waitFor({
            state: 'visible',
            timeout: 60000
        });

        await dropdown.first().click();

        const option = this.page
            .getByRole('option')
            .filter({ hasText: optionText });

        await option.first().waitFor({
            state: 'visible',
            timeout: 10000
        });

        await option.first().click();

        await this.waitForUIToBeReady();
    }

    /**
     * Select a random option from Angular Material dropdown.
     * Returns the selected option text.
     */
    async selectRandomOption(dropdown: Locator): Promise<string> {
        await this.waitForUIToBeReady();

        await dropdown.first().click();

        const options = this.page.locator('mat-option');

        await options.first().waitFor({
            state: 'visible',
            timeout: 10000
        });

        const count = await options.count();

        if (count === 0) {
            throw new Error('No dropdown options found');
        }

        const randomIndex = Math.floor(Math.random() * count);

        const option = options.nth(randomIndex);

        const text = (await option.textContent())?.trim() || '';

        await option.click();

        await this.waitForUIToBeReady();

        return text;

    }

    async waitForUIToBeReady() {
        await expect(this.page.locator('.container-loader:visible')).toHaveCount(0, {
            timeout: 30000
        });
    }
}
