import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
describe('E2E Tests - Find Transactions', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
    it('Transaction filter should work', () => {
        const accountActivity = $('#account_activity_tab')
        accountActivity.waitForExist()
        accountActivity.click()
        const findTransactions = $('a[href="#ui-tabs-2"]')
        findTransactions.waitForExist()
        findTransactions.click()
        const description = $('#aa_description')
        description.waitForExist()
        description.setValue('test')
        const findBtn = $('.btn.btn-primary')
        findBtn.waitForExist()
        findBtn.click()
        const noResAlert = $('.well')
        noResAlert.waitForExist()
        expect(noResAlert).toHaveText('No results.')

    })
})