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
    readonly fbabehaviors: Locator;
    readonly spinner: Locator;
    readonly addnew: Locator;
    readonly startDateIcon: Locator;
    readonly addressedinBSP: Locator;
    readonly targetbehavior: Locator;
    readonly replacementActivities: Locator;
    readonly interventions: Locator;
    readonly tempbsptargetbehaviorField: Locator;
    readonly replacementbehavioraddNew: Locator;
    readonly replacementbehavior: Locator;
    readonly replacementbehaviorsaveButton: Locator;
    readonly reinforcementbehavioraddnew: Locator;
    readonly reinforcementbehavior: Locator;
    readonly reinforcementbehaviorsaveButton: Locator;
    readonly targetbehaviorsaveButton: Locator;


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
               
       this.fbabehaviors = this.page.getByText('FBA Behavior six');
       //this.fbabehaviors = page.locator('//mat-panel-title').filter({hasText: 'FBA Behavior six'});
       
       // Spinner locator
       this.spinner = page.locator('//div[contains(@class,"container-loader")]');

       this.addnew = page.locator('(//a[contains(text(),"ADD NEW")])[5]');
       this.startDateIcon = page.locator('(//span[@class="mat-mdc-button-touch-target"])[4]');
       this.addressedinBSP = page.getByRole('combobox', { name: /addressed in bsp/i });
       this.targetbehavior = page.locator('//textarea[@id="txtAreatargetBehavior"]');
       this.replacementActivities = page.locator('//textarea[@id="txtAreafbaField_1"]');
       this.interventions = page.locator('//textarea[@id="txtAreafbaField_2"]');
       this.tempbsptargetbehaviorField = page.locator('//textarea[@id="txtAreafbaField_3"]');
       this.replacementbehavioraddNew = page.locator('(//span[@class="m-1"][normalize-space()="ADD NEW"])[1]');
       this.replacementbehavior = page.locator('//input[@id="mat-input-62"]');
       this.replacementbehaviorsaveButton = page.locator('//span[contains(text(),"Save")])[2]');
       this.reinforcementbehavioraddnew = page.locator('(//span[@class="m-1"][normalize-space()="ADD NEW"])[2]');
       this.reinforcementbehavior = page.locator("(//input[@id='mat-input-61'])[1]");
       this.reinforcementbehaviorsaveButton = page.locator('(//span[contains(text(),"Save")])[2]');  
       this.targetbehaviorsaveButton = page.locator('//span[contains(text(),"Save")]')
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
    const spinners = await this.spinner.all();
    for (const spinner of spinners) {
        await spinner.waitFor({
            state: 'hidden',
            timeout: 60000
        });
    }
    }
     async clickBehaviors() {
    await this.fbabehaviors.waitFor({
        state: 'visible'
    });
    await this.fbabehaviors.click();
    }
    
    async clickAddNew() {
        await this.addnew.click();
    }
   async selectStartDate(day: string = '31') {
    await this.startDateIcon.click();

    await this.page
        .locator(`//span[normalize-space()="${day}"]`)
        .click();
}
    async selectAddressedinBSP() {
        await this.addressedinBSP.click();
        await this.page
            .locator('//mat-option//span[@class="app-text-color"]')
            .nth(1)
            .click();
    }
    async enterTargetBehavior(text: string) {
        await this.targetbehavior.fill(text);
    }
    async enterReplacementActivities(text: string) {
        await this.replacementActivities.fill(text);
    }
    async enterInterventions(text: string) {
        await this.interventions.fill(text);
    }
    async enterTempBSPTargetBehavior(text: string) {
        await this.tempbsptargetbehaviorField.fill(text);
    }
    async clickReplacementBehaviorAddNew() {
        await this.replacementbehavioraddNew.click();
    }
    async enterReplacementBehavior(text: string) {
        await this.replacementbehavior.fill(text);
    }
    async clickReplacementBehaviorSave() {
        await this.replacementbehaviorsaveButton.click();
    }
    async clickReinforcementBehaviorAddNew() {
        await this.reinforcementbehavioraddnew.click();
    }
    async enterReinforcementBehavior(text: string) {
        await this.reinforcementbehavior.fill(text);
    }
    async clickReinforcementBehaviorSave() {
        await this.reinforcementbehaviorsaveButton.click();
    }
    async clickTargetBehaviorSave() {
        await this.targetbehaviorsaveButton.click();
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
        await this.clickBehaviors();
        await this.clickAddNew();
        await this.selectStartDate('31');
        await this.selectAddressedinBSP();
        await this.enterTargetBehavior('Testing Target Behavior');
        await this.enterReplacementActivities('Testing Replacement Activities');
        await this.enterInterventions('Testing Interventions');
        await this.enterTempBSPTargetBehavior('Testing Temp BSP Target Behavior');
        await this.clickReplacementBehaviorAddNew();
        await this.enterReplacementBehavior('Testing Replacement Behavior');
        await this.clickReplacementBehaviorSave();
        await this.clickReinforcementBehaviorAddNew();
        await this.enterReinforcementBehavior('Testing Reinforcement Behavior');
        await this.clickReinforcementBehaviorSave();
        await this.clickTargetBehaviorSave();
    }

}