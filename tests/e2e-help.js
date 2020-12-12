import{long} from '../lib/timeouts'
import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/pages/HelpPage'
describe('E2E Tests - Help', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
}) 
    it('Should be able to access help section', () => {
        Navbar.clickSettingsBtn()
        Navbar.clickHelpLink()
        const title= HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.clickTransferFundsLink()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.clickpayBillsLink()
        expect(title).toHaveText('How do I pay bills?')
        browser.pause(long)

    })
})