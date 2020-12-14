import Base from '../Base'
class BankPage extends Base{

    get purchaseForeignCurrencyLink(){
        return $('a[href = "#ui-tabs-3"]')
    }
    get selectOneDropDown(){
        return $('#pc_currency')
    }
    get ammount() {
        return $('#pc_amount')
    }
    get dollarRadio(){
        return $('#pc_inDollars_true')
    }
    get purchaseBtn() {
        return $('#purchase_cash')
    }
    get successAlert(){
        return $('#alert_content')
    }
    verifyAlertMsg(message){

        this.successAlert.waitForExist()
        expect(this.successAlert).toHaveText(message)
    }
    clickPurchaseBtn(){
        this.purchaseBtn.waitForExist()
        this.purchaseBtn.click()
    }
    clickDollarRadioBtn(){
        this.dollarRadio.waitForExist()
        this.dollarRadio.click()
    }
    setAmmountValue(value){
        this.ammount.waitForExist()
        this.ammount.setValue(value)
    }
    selectOneDropDownVal(currency){
        this.selectOneDropDown.waitForExist()
        this.selectOneDropDown.selectByAttribute('value', currency)
    }
    clickPurchaseForeignCurrencyLink(){
        this.purchaseForeignCurrencyLink.waitForExist()
        this.purchaseForeignCurrencyLink.click()
    }
}
export default new BankPage()