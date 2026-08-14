import { expect, Locator, Page } from '@playwright/test';
import { CommonUtility } from '../utils/commonUtility';
import { palData } from '../utils/testData';

export class PalPage extends CommonUtility {
    readonly palMenu;
    readonly clientName;
    readonly addButton;
    readonly createButton;
    readonly startDateIcon;
    readonly endDateIcon;
    readonly typeDropdown;
    readonly typeOption;
    readonly textArea;
    readonly amount1;
    readonly amount2;
    readonly amount3;
    readonly saveButton;
    readonly palCard;
    readonly transactionTypeDropdown;
    readonly depositOption;
    readonly depositamount;
    readonly dateoftransaction;
    readonly purposeDropdown;
    readonly statusDropdown;
    readonly customizableNoteLabel;
    readonly paltransactionDeposit;
    private palRecord?: Locator;


    // Locators
    constructor(page: Page) {
        super(page);

        this.palMenu = page.getByText('Personal Allowance Ledger');
        this.clientName = page.getByTitle('RoyKent');
        this.addButton = page.getByText('ADD NEW');
        this.createButton = page.locator("//span[@class='btn-text create-btn-text title']");
        this.startDateIcon = page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]');
        this.endDateIcon = page.locator('mat-form-field').filter({ hasText: /End Date/i }).getByLabel('Open calendar');
        this.typeDropdown = page.getByRole('combobox', { name: /type/i });
        this.typeOption = page.getByRole('option').filter({ hasText: /clothing/i });
        this.textArea = page.locator('#txtArea');
        this.amount1 = page.locator('(//input[@type="text"])[1]');
        this.amount2 = page.locator('(//input[@type="text"])[2]');
        this.amount3 = page.locator('(//input[@type="text"])[3]');
        this.saveButton = page.locator('button').filter({ hasText: /^Save$/ }).first();
        this.palCard = page.locator('(//div[@class="card-content"])[1]');
        this.transactionTypeDropdown = page.getByRole('combobox', {name: /transaction type/i});
        this.depositOption = page.getByRole('option').filter({ hasText: /deposit/i });
        this.depositamount = page.locator('//input[@type="number"]');
        this.dateoftransaction = page.locator('mat-form-field').filter({ hasText: /Date of Transaction/i }).getByLabel('Open calendar');
        this.purposeDropdown = page.getByRole('combobox', { name: /purpose/i });
        this.statusDropdown = page.getByRole('combobox', { name: /status/i });
        this.customizableNoteLabel = page.getByText('Customizable Note Label');
        this.paltransactionDeposit = page.getByText('PAL Transaction Deposit');

    }

    // Methods
    async createPAL() {
        await this.click(this.palMenu);
        await this.click(this.clientName);
        await this.click(this.addButton);
        await this.click(this.createButton);
        const selectedDate = await this.selectRandomFutureDate(this.startDateIcon);
        const typeDropdownOption = await this.selectRandomOption(this.typeDropdown);

    }
    async fillPALInformation(data: any) {
        await this.fill(this.textArea, data.description);
        await this.fill(this.amount1, data.amountOfCashAndCashEquivalentsAtTheParticipantsResidenceDayProgram);
        await this.fill(this.amount2, data.amountOfMoneyInTheParticipantOwnedAccount);
        await this.fill(this.amount3, data.amountOfMoneyInTheParticipantAgencyBankAccount);
        await this.selectRandomFutureDate(this.endDateIcon, 1);
        await this.click(this.saveButton);
        await this.waitForSpinner();
        this.palRecord = this.page.getByText(data.description, { exact: true }).last();
        await expect(this.palRecord).toBeVisible();

    }
    async createTransactions(data: any) {
        if (!this.palRecord) {
            throw new Error('PAL record must be saved before a transaction can be created');
        }
        await this.click(this.palRecord);
        await this.click(this.addButton);
        await this.waitForUIToBeReady();
        await this.selectMatOption(this.transactionTypeDropdown, 'Deposit');
        await this.fill(this.depositamount, data.depositAmount);
        const selectedDate = await this.selectRandomFutureDate(this.dateoftransaction);
        const selectedPurposeOption = await this.selectRandomOption(this.purposeDropdown);
        await this.waitForUIToBeReady();
        await this.selectRandomOption(this.statusDropdown);
        await this.fill(this.customizableNoteLabel, data.customizableNoteLabel);
        await this.fill(this.paltransactionDeposit, data.paltransactionDeposit);
        await this.click(this.saveButton, true);
    }
}



