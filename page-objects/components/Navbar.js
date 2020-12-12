import Base from '../Base'
class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')    
    }
    get insideNavbar(){
        return $('.nav-tabs')
    }
    get settingsBtn(){
        return $('.dropdown-toggle')
    }
    get helpLink() {
        return $('#help_link')
    }
    get searchInputField() {
        return $('#searchTerm')
    }
    inputValueSearchInputField(value) {
        this.searchInputField.waitForExist()
        this.searchInputField.setValue(value)
        browser.keys('Enter')   
    }
    clickHelpLink(){
        this.helpLink.waitForExist()
        this.helpLink.click()
    }
    clickSettingsBtn(){
        this.settingsBtn.waitForExist()
        this.settingsBtn.click()
    }
    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }
    insideNavbarIsVisible() {
        this.insideNavbar.waitForExist()
    }
    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }
}
export default new Navbar()