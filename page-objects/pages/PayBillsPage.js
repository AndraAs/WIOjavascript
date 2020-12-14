import Base from '../Base'
class PayBillsPage extends Base {

    get payee(){
        return $('#sp_payee')
    }
    get account() {
        return $('#sp_account')
    }
    get ammount() {
        return $('#sp_amount')
    }
    get date() {
        return $('#sp_date')
    }
    get description() {
        return $('#sp_description')
    }
    get payBtn() {
        return $('#pay_saved_payees')
    }
    clickPayBtn(){
        this.payBtn.waitForExist()
        this.payBtn.click()
    }
    setDescription(value) {
        this.description.waitForExist()
        this.description.setValue(value)
    }
    setDate(value) {
        this.date.waitForExist()
        this.date.setValue(value)
    }
    setAmmountValue(value){
        this.ammount.waitForExist()
        this.ammount.setValue(value)
    }
    selectAccount(value) {
        this.account.waitForExist()
        this.account.selectByVisibleText(value)
    }
    selectPayee(value){
        this.payee.waitForExist()
        this.payee.selectByAttribute('value',value)
    }
}
export default new PayBillsPage()