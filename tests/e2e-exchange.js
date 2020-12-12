import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
describe('E2e Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()

    })
    it('Should make currency exchange', () => {
        const payBill= $('#pay_bills_tab')
        payBill.waitForExist()
        payBill.click()
        const foreignCurrency = $('a[href = "#ui-tabs-3"]')
        foreignCurrency.waitForExist()
        foreignCurrency.click()
        const selectOneDrop= $('#pc_currency')
        selectOneDrop.waitForExist()
        selectOneDrop.selectByAttribute('value', 'GBP')
        const ammount=$('#pc_amount')
        ammount.waitForExist()
        ammount.setValue('1000')
        const usRadio= $('#pc_inDollars_true')
        usRadio.waitForExist()
        usRadio.click()
        const purchaseBtn = $('#purchase_cash')
        purchaseBtn.waitForExist()
        purchaseBtn.click()
        const successAlert= $('#alert_content')
        successAlert.waitForExist()
        expect(successAlert).toHaveText('Foreign currency cash was successfully purchased.')

    })
})