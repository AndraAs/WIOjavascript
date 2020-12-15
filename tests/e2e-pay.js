import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import PayBillsPage from '../page-objects/pages/PayBillsPage'
import BankPage from '../page-objects/pages/BankPage'
import { browser } from '../lib/config'
describe('E2E Tests - Pay', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
    it('Should make payment', () => {
        Navbar.clickOnlineBankingLink()
        PayBillsPage.selectPayee('apple')
        PayBillsPage.selectAccount('Loan')
        PayBillsPage.setAmmountValue('1000')
        PayBillsPage.setDate('2020-08-27')
        PayBillsPage.setDescription('Money payment')
        PayBillsPage.clickPayBtn()
        // browser.waitAndClick('#pay_saved_payees')
        BankPage.verifyAlertMsg('The payment was successfully submitted.')
    })
})