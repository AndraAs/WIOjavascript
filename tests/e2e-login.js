import {long} from '../lib/timeouts'
describe('E2E tests - Login / Logout Flow', () => {
    it('Should not login with invalid credential', () => {
        browser.url('http://zero.webappsecurity.com/')
        // const signInBtn= $('#signin_button')
        // signInBtn.waitForExist()
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('gresit')
        $('#user_password').setValue('gresit')
        $('input[type= "submit"]').waitForExist()
        $('input[type= "submit"]').click()
        const error = $('.alert.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
        
    })
    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        // const signInBtn= $('#signin_button')
        // signInBtn.waitForExist()
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type= "submit"]').waitForExist()
        $('input[type= "submit"]').click()
        $('.nav-tabs').waitForExist()
    })
    it('should logout from app', () => {
       $('.icon-user').waitForExist()
       $('.icon-user').click()
       $('#logout_link').waitForExist()
       $('#logout_link').click()
       $('#pages-nav').waitForExist()

    })

})