const Page = require("./page");

class PromotionPage extends Page {

    get promotionData(){
        return $$('//div[contains(@class, "promotion-data")]//span//i')
    }

    get buttonEditPromotion(){
        return $('//*[contains(@mattooltip, "Редактировать")]')
    }

    get buttonDeletePromotion(){
        return $('//*[contains(@mattooltip, "Удалить")]')
    }

    get priorityPromotion(){
        return $('#mat-select-4')
    }

    get discountPromotion(){
        return $('#mat-select-5')
    }

    get buttonSave(){
        return $('//*[contains(text(), "Сохранить")]')
    }

    get buttonCancel(){
        return $('//*[contains(text(), "Отменить")]')
    }

    get createGreetingsPromotionButton(){
        return $('/html/body/app-root/app-promotion/div[2]/div/div/table/tbody[1]/tr[2]/td/div/div[2]/div[2]/div/div[2]/div/div[1]/button');
    }

    get greetingPriority(){
        return $('//*[@id="mat-select-1"]/div/div[1]')
    }

    get greetingRadioPoint(){
        return $('#mat-radio-2')
    }

    get greetingRadioDiscount(){
        return $('#mat-radio-3')
    }

    get greetingPoint(){
        return $('#mat-input-3')
    }

    async clickPromotionData(){
        await browser.pause(5000);
        //index 0-7 for promotion data
        await this.promotionData[0].waitForDisplayed();
        await this.promotionData[0].click();
        console.log('Click promotion data')
    }

    async clickSave(){
        await this.buttonSave.waitForDisplayed();
        await this.buttonSave.click();
        await this.buttonYes.waitForDisplayed();
        await this.buttonYes.click();
        console.log('Click save')
    }

    async clickCancel(){
        await this.buttonCancel.waitForDisplayed();
        await this.buttonCancel.click();   
        console.log('Click cancel') 
    }

    async selectGreetingPriority(option){
        await this.greetingPriority.waitForDisplayed();
        await this.greetingPriority.click()
        const priorityOption = $(`//mat-option//span[contains(text(), "${option}")]`)
        await priorityOption.click();
        console.log('Select greeting priority')
    }

    async selectRadioGreeting(radio){
        if(radio === 'Баллы'){
            await this.greetingRadioPoint.waitForDisplayed();
            await this.greetingRadioPoint.click();
        }else{
            await this.greetingRadioDiscount.waitForDisplayed();
            await this.greetingRadioDiscount.click();
        }
    }

    async inputGreetingPoint(point){
        await this.greetingPoint.waitForDisplayed();
        await this.greetingPoint.setValue(point);
    }

    open () {
        return super.open('promotions');
    }
}

module.exports = new PromotionPage();