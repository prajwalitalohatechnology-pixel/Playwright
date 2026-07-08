import { Page, Locator } from '@playwright/test';

export class FBAPage {

    private readonly page: Page;

    // Locators
    readonly behaviorSupportMenu: Locator;
    readonly fbaMenu: Locator;
    readonly clientName: Locator;
    readonly addButton: Locator;
    readonly createButton: Locator;

    readonly MFConsumerSatisfactionLevel: Locator;
    readonly MFHealthandSafetyConcerns: Locator;
    readonly MFSignificantChangesorEvents: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.behaviorSupportMenu = page.locator('//span[contains(text(),"Behavior Support")]');
        this.fbaMenu = page.locator('//span[contains(text(),"FBA")]');
        this.clientName = page.locator('//span[@title="RoyKent"]');

        this.addButton = page.locator('//span[contains(text(),"ADD NEW")]');
        this.createButton = page.locator('//span[@class="btn-text create-btn-text title"]');

        this.MFConsumerSatisfactionLevel = page.locator('#txtArea30116');
        this.MFHealthandSafetyConcerns = page.locator('#txtArea30117');
        this.MFSignificantChangesorEvents = page.locator('#txtArea30118');

        this.saveButton = page.locator('(//span[contains(text(),"Save")])[3]');
    }

    async openBehaviorSupportMenu() {
        await this.behaviorSupportMenu.click();
    }

    async openFBASection() {
        await this.fbaMenu.click();
    }

    async selectClient() {
        await this.clientName.click();
    }

    async createFBA() {
        await this.addButton.click();
        await this.createButton.click();
    }

    async enterMFConsumerSatisfactionLevel(text: string) {
        await this.MFConsumerSatisfactionLevel.fill(text);
    }

    async enterMFHealthandSafetyConcerns(text: string) {
        await this.MFHealthandSafetyConcerns.fill(text);
    }

    async enterMFSignificantChangesorEvents(text: string) {
        await this.MFSignificantChangesorEvents.fill(text);
    }
    async clickSave() {
        await this.saveButton.click();
    }

    async createNewFBA(
        MFConsumerSatisfactionLevel: string,
        MFHealthandSafetyConcerns: string,
        MFSignificantChangesorEvents: string,
    ) {
        await this.openBehaviorSupportMenu();
        await this.openFBASection();
        await this.selectClient();
        await this.createFBA();
        await this.enterMFConsumerSatisfactionLevel(MFConsumerSatisfactionLevel);
        await this.enterMFHealthandSafetyConcerns(MFHealthandSafetyConcerns);
        await this.enterMFSignificantChangesorEvents(MFSignificantChangesorEvents);
        await this.clickSave();
    }
}