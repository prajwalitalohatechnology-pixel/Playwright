import { Page, Locator } from '@playwright/test';
import { CommonUtility } from '../utils/commonUtility';

export class FBAPage extends CommonUtility {

    // Navigation
    readonly behaviorSupportMenu;
    readonly fbaMenu;
    readonly clientName;

    // FBA General
    readonly addButton;
    readonly createButton;
    readonly consumerLevel;
    readonly healthSafety;
    readonly significantChanges;
    readonly saveButton;

    // Behavior
    readonly behaviors;
    readonly addBehavior;
    readonly startDate;
    readonly addressed;
    readonly targetBehavior;
    readonly replacementActivities;
    readonly interventions;
    readonly tempBehavior;

    // Replacement
    readonly replacementAdd;
    readonly replacementInput;
    readonly replacementSave;

    // Reinforcement
    readonly reinforcementAdd;
    readonly reinforcementInput;
    readonly reinforcementSave;
    spinner: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;

        // --- Navigation ---
        this.behaviorSupportMenu = page.locator('//span[contains(text(),"Behavior Support")]');
        this.fbaMenu = page.locator('//span[contains(text(),"FBA")]');
        this.clientName = page.locator('//span[@title="RoyKent"]');

        // --- FBA ---
        this.addButton = page.locator('//span[contains(text(),"ADD NEW")]');
        this.createButton = page.locator('//span[@class="btn-text create-btn-text title"]');
        this.consumerLevel = page.locator('#txtArea30116');
        this.healthSafety = page.locator('#txtArea30117');
        this.significantChanges = page.locator('#txtArea30118');
        this.saveButton = page.locator('(//span[contains(text(),"Save")])[3]');
        this.spinner = page.locator('//div[contains(@class,"container-loader")]');

        // --- FBA Behavior Section ---
        this.behaviors = this.page.getByText('FBA Behavior six');
        this.addBehavior = page.locator('(//a[contains(text(),"ADD NEW")])[5]');
        this.startDate = page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]');
        this.addressed = page.getByRole('combobox', { name: /addressed in bsp/i });
        this.targetBehavior = page.locator('//textarea[@id="txtAreatargetBehavior"]');
        this.replacementActivities = page.locator('//textarea[@id="txtAreafbaField_1"]');
        this.interventions = page.locator('//textarea[@id="txtAreafbaField_2"]');
        this.tempBehavior = page.locator('//textarea[@id="txtAreafbaField_3"]');
        this.replacementAdd = page.locator('(//span[@class="m-1"][normalize-space()="ADD NEW"])[1]');
        this.replacementAdd = page.locator('//input[@id="mat-input-62"]');
        this.replacementInput = page.locator('//span[contains(text(),"Save")])[2]');
        this.replacementSave = page.locator('(//span[@class="m-1"][normalize-space()="ADD NEW"])[2]');
        this.reinforcementAdd = page.locator("(//input[@id='mat-input-61'])[1]");
        this.reinforcementInput = page.locator('(//span[contains(text(),"Save")])[2]');
        this.reinforcementSave = page.locator('//span[contains(text(),"Save")]')
    }

    async openFBA() {
        await this.click(this.behaviorSupportMenu);
        await this.click(this.fbaMenu);
        await this.click(this.clientName);
        await this.click(this.addButton);
        await this.click(this.createButton);
    }

    async fillGeneralInformation(data: any) {
        await this.fill(this.consumerLevel, data.consumerLevel);
        await this.fill(this.healthSafety, data.healthSafety);
        await this.fill(this.significantChanges, data.significantChanges);
        await this.clickAndWait(this.saveButton);
    }

    async fillBehavior(data: any) {
        await this.click(this.behaviors);
        await this.click(this.addBehavior);
        const selectedDate = await this.selectRandomFutureDate(this.startDate);
        const utility = new CommonUtility(this.page);
        await utility.selectMatOption(this.addressed, 'Yes');
        await this.fill(this.targetBehavior, data.targetBehavior);
        await this.fill(this.replacementActivities, data.replacementActivities);
        await this.fill(this.interventions, data.interventions);
        await this.fill(this.tempBehavior, data.tempBehavior);
    }

}