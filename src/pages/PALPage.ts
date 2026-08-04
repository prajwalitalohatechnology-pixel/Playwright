import { Page } from '@playwright/test';
import { CommonUtility } from '../utils/commonUtility';
import { palData } from '../utils/testData';

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
    readonly transactionstype;
    readonly depositOption;
    readonly depositamount;
    readonly dateoftransaction;
    readonly perposeDropdown;
    readonly perposeOption;
    readonly statusDropdown;
    readonly statusOption;
    readonly customizableNoteLabel;
    readonly paltransactionDeposit;


    // Locators
    constructor(page: Page) {
        super(page);

        this.palMenu = page.getByText('Personal Allowance Ledger');
        this.clientName = page.getByTitle('RoyKent');
        this.addButton = page.getByText('ADD NEW');
        this.createButton = page.locator("//span[@class='btn-text create-btn-text title']");
        this.startDateIcon = page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]');
        this.typeDropdown = page.getByRole('combobox', { name: /type/i }).first();
        this.typeOption = page.getByRole('option', { name: /clothing/i }).first();
        this.textArea = page.locator('#txtArea');
        this.amount1 = page.locator('(//input[@type="text"])[1]');
        this.amount2 = page.locator('(//input[@type="text"])[2]');
        this.amount3 = page.locator('(//input[@type="text"])[3]');
        this.saveButton = page.locator('button').filter({ hasText: /^Save$/ }).first();
        this.palCard = page.locator('(//div[@class="card-content"])[1]');
        this.transactionstype = page.getByRole('combobox', { name: /transaction type/i });
        this.depositOption = page.getByRole('option', { name: /deposit/i }).first();
        this.depositamount = page.locator('//input[@type="number"]');
        this.dateoftransaction = page.locator('mat-form-field').filter({ hasText: /Date of Transaction/i }).getByLabel('Open calendar');
        this.perposeDropdown = page.getByRole('combobox', { name: /purpose/i });
        this.perposeOption = page.getByRole('option', { name: /allowance/i }).first();
        this.statusDropdown = page.getByRole('combobox', { name: /status/i });
        this.statusOption = page.getByRole('option', { name: /draft/i }).first();
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
        await this.click(this.typeDropdown);
        await this.click(this.typeOption);

    }
    async fillPALInformation(data: any) {
        await this.fill(this.textArea, data.description);
        await this.fill(this.amount1, data.amountOfCashAndCashEquivalentsAtTheParticipantsResidenceDayProgram);
        await this.fill(this.amount2, data.amountOfMoneyInTheParticipantOwnedAccount);
        await this.fill(this.amount3, data.amountOfMoneyInTheParticipantAgencyBankAccount);
        await this.click(this.saveButton, true);
        await this.waitForSpinner();
        await this.waitForVisible(this.palCard);

    }
    async createTransactions(data: any) {
        await this.click(this.palCard);
        await this.click(this.addButton);
        await this.click(this.transactionstype);
        await this.click(this.depositOption);
        await this.fill(this.depositamount, data.depositAmount);
        const selectedDate = await this.selectRandomFutureDate(this.dateoftransaction);
        await this.click(this.perposeDropdown);
        await this.click(this.perposeOption);
        await this.click(this.statusDropdown);
        await this.click(this.statusOption);
        await this.fill(this.customizableNoteLabel, data.customizableNoteLabel);
        await this.fill(this.paltransactionDeposit, data.paltransactionDeposit);
        await this.click(this.saveButton, true);


    }
}



