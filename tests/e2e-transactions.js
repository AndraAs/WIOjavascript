import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import FiltersPage from '../page-objects/pages/FiltersPage'
describe('E2E Tests - Find Transactions', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
    it('Transaction filter should work', () => {
        InsideNavbar.clickActivityTab()
        InsideNavbar.clickFiltersLink()
        FiltersPage.fillDescription('test')
        FiltersPage.clickFindBtn()
        FiltersPage.resultTableIsVisible()
        const noResAlert = FiltersPage.message
        noResAlert.waitForExist()
        expect(noResAlert).toHaveText('No results.')

    })
})