import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import BankPage from '../page-objects/pages/BankPage'
describe('E2e Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()

    })
    it('Should make currency exchange', () => {
        Navbar.clickOnlineBankingLink()
        BankPage.clickPurchaseForeignCurrencyLink()
        BankPage.selectOneDropDownVal('GBP')
        BankPage.setAmmountValue('1000')
        BankPage.clickDollarRadioBtn()
        BankPage.clickPurchaseBtn()
        BankPage.verifyAlertMsg('Foreign currency cash was successfully purchased.')

    })
})