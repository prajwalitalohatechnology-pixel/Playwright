import { Page } from '@playwright/test';

export class PalPage {
    constructor(private page: Page) { }

    // Locators
    palMenu = '(//span[@class="nav-menu-text ng-star-inserted"])[6]';
    clientName = '//span[@title="RoyKent"]';
    addButton = '//span[@class="mat-mdc-button-persistent-ripple mdc-fab__ripple"]';
    createButton = '//span[text()="CREATE"]';

    startDateIcon = '(//span[@class="mat-mdc-button-touch-target"])[4]';
    startDate = '(//span[@class="mat-calendar-body-cell-preview"])[3]';

    dropdown = '#mat-select-value-17';
    dropdownOption = '(//span[@class="app-text-color"])[3]';

    textArea = '#txtArea';

    amount1 = '(//input[@type="text"])[1]';
    amount2 = '(//input[@type="text"])[2]';
    amount3 = '(//input[@type="text"])[3]';

    endDateIcon = '(//span[@class="mat-mdc-button-touch-target"])[5]';
    endDate = '(//span[@class="mat-calendar-body-cell-content mat-focus-indicator"])[11]';

    saveButton = '//span[text()="Save"]';

    // Methods
    async openPALSection() {
        await this.page.locator(this.palMenu).click();
    }

    async selectClient() {
        await this.page.locator(this.clientName).click();
    }

    async createPAL() {
        await this.page.locator(this.addButton).click();
        await this.page.locator(this.createButton).click();
    }

    async selectStartDate() {
        await this.page.locator(this.startDateIcon).click();
        await this.page.locator(this.startDate).click();
    }

    async selectDropdownValue() {
        await this.page.locator(this.dropdown).click();
        await this.page.locator(this.dropdownOption).click();
    }

    async enterDescription(text: string) {
        await this.page.locator(this.textArea).fill(text);
    }

    async enterAmounts(value1: string, value2: string, value3: string) {
        await this.page.locator(this.amount1).fill(value1);
        await this.page.locator(this.amount2).fill(value2);
        await this.page.locator(this.amount3).fill(value3);
    }

    async selectEndDate() {
        await this.page.locator(this.endDateIcon).click();
        await this.page.locator(this.endDate).click();
    }

    async clickSave() {
        await this.page.locator(this.saveButton).click();
    }
}