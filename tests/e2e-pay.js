import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
describe('E2E Tests - Pay', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
    it('Should make payment', () => {
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        const payee= $('#sp_payee')
        payee.waitForExist()
        payee.selectByAttribute('value', 'apple')
        const account = $('#sp_account')
        account.waitForExist()
        account.selectByVisibleText('Loan')
        const ammount = $('#sp_amount')
        ammount.waitForExist()
        ammount.setValue('1000')
        const date = $('#sp_date')
        date.waitForExist()
        date.setValue('2020-08-27')
        const description = $('#sp_description')
        description.waitForExist()
        description.setValue('Money payment')
        const payBtn = $('#pay_saved_payees')
        payBtn.waitForExist()
        payBtn.click()
        const successAlert = $('#alert_content')
        expect(successAlert).toHaveText('The payment was successfully submitted.')
    })
})