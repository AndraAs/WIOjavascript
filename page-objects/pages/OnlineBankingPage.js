import Base from '../Base'
class OnlineBankingPage extends Base {

    get payBillsLink(){
        return $('#pay_bills_link')
    }
    cliclPayBillsLink(){
        this.payBillsLink.waitForExit()
        this.payBillsLink.click()
    }
}
export default new OnlineBankingPage()