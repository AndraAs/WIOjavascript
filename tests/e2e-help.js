import{long} from '../lib/timeouts'
import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
describe('E2E Tests - Help', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
}) 
    it('Should be able to access help section', () => {
        const settingsDropDown = $('.dropdown-toggle')
        settingsDropDown.waitForExist()
        settingsDropDown.click()
        const help= $('#help_link')
        help.waitForExist()
        help.click()
        const header = $('.page-header')
        header.waitForExist()
        expect(header).toHaveText('Help Topics')
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')
        $('*=I transfer funds?').waitForExist()
        $('*=I transfer funds?').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=I pay bills?').waitForExist()
        $('*=I pay bills?').click()
        expect(title).toHaveText('How do I pay bills?')
        browser.pause(long)

    })
})