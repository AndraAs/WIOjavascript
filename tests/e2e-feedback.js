import App from '../page-objects/App'
import {long} from '../lib/timeouts'
describe('E2e - Feedback', () => {
    it('Should load feedback', () => {
        //browser.url('http://zero.webappsecurity.com/')
        App.openHomePage()
        $('#feedback').waitForExist()
        $('#feedback').click()
        $('.signin-controls.form-inputs').waitForExist()
        browser.pause(long)

    })
    it('Should submit feedback form', () => {
        $('#name').waitForExist()
        $('#name').setValue('andra')
        $('#email').waitForExist()
        $('#email').setValue('andra.astalus@smth.com')
        $('#subject').waitForExist()
        $('#subject').setValue('Automation')
        $('#comment').waitForExist()
        $('#comment').setValue('Future plans?')
        $('input[type= "submit"]').waitForExist()
        browser.pause(long)
        $('input[type= "submit"]').click()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})