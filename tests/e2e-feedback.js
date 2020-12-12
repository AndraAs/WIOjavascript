import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
import {long} from '../lib/timeouts'
describe('E2e - Feedback', () => {
    it('Should load feedback', () => {
        // App.openHomePage()
        // $('#feedback').waitForExist()
        // $('#feedback').click()
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()

    })
    it('Should submit feedback form', () => {
        FeedbackPage.fillForm('andra','andra.as@gmail.com','Future plans?','just a message')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})