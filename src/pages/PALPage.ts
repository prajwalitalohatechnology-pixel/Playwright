import { Page } from '@playwright/test';
import { CommonUtility } from '../utils/commonUtility';

export class PalPage extends CommonUtility {

    readonly palMenu;
    readonly clientName;
    readonly addButton;
    readonly createButton;
    readonly startDateIcon;
    readonly typeDropdown;
    readonly typeOption;
    readonly textArea;
    readonly amount1;
    readonly amount2;
    readonly amount3;
    readonly saveButton;
    readonly palCard;

    
        // Locators
        constructor(page: Page) {
            super(page);

            this.palMenu = page.getByText('Personal Allowance Ledger');
            this.clientName = page.getByTitle('RoyKent');
            this.addButton = page.getByText('ADD NEW');
            this.createButton = page.locator("//span[@class='btn-text create-btn-text title']");
            this.startDateIcon = page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]');
            this.typeDropdown = page.locator('#mat-select-value-15');
            this.typeOption = page.getByText('Clothing');
            this.textArea = page.locator('#txtArea');
            this.amount1 = page.locator('(//input[@type="text"])[1]');
            this.amount2 = page.locator('(//input[@type="text"])[2]');
            this.amount3 = page.locator('(//input[@type="text"])[3]');
            this.saveButton = page.getByText('Save');
            this.palCard = page.locator('(//div[@class="card-content"])[1]');
        }

    // Methods
    async createPAL() {
        await this.click(this.palMenu);
        await this.click(this.clientName);
        await this.click(this.addButton);
        await this.click(this.createButton);
        await this.selectDate(this.startDateIcon, '31');
        await this.click(this.typeDropdown);
        await this.click(this.typeOption);

    }

    async fillPALInformation(data: any) {
        await this.fill(this.textArea, data.description);
        await this.fill(this.amount1, data.amountOfCashAndCashEquivalentsAtTheParticipantsResidenceDayProgram);
        await this.fill(this.amount2, data.amountOfMoneyInTheParticipantOwnedAccount);
        await this.fill(this.amount3, data.amountOfMoneyInTheParticipantAgencyBankAccount);
        await this.selectDate(this.startDateIcon, '31');
        await this.click(this.saveButton);
    }
}



