import Base from '../Base'

class HelpPage extends Base {

    get title() {
        return $('.span8 > h3')
    }
    get transferFundsLink() {
        return $('*=I transfer funds?')
    }
    get payBillsLink() {
        return $('*=I pay bills?')
    }
    clickTransferFundsLink() {
        this.transferFundsLink.waitForExist()
        this.transferFundsLink.click()
    }
    clickpayBillsLink() {
        this.payBillsLink.waitForExist()
        this.payBillsLink.click()
    }
}
export default new HelpPage()