import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'
import {long} from '../lib/timeouts'
import Navbar from '../page-objects/components/Navbar'
describe('E2E tests - Login / Logout Flow', () => {
    it('Should not login with invalid credential', () => {
       App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username','invalid pswd')
        LoginPage.submitForm()
        
        const error = LoginPage.errorMsg
        expect(error).toHaveText('Login and/or password are wrong.')
        
    })
    it('Should login with valid credentials', () => {
        App.openHomePage()
        // $('#signin_button').waitForExist()
        // $('#signin_button').click()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
    })
    it('should logout from app', () => {
    //    $('.icon-user').waitForExist()
    //    $('.icon-user').click()
    //    $('#logout_link').waitForExist()
    //    $('#logout_link').click()
          App.logout()
          Navbar.signInButtonIsVisible()

    })

})