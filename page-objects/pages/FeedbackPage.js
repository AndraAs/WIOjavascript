import Base from '../Base'
class FeedbackPage extends Base{
    get signInForm() {
        return $('.signin-controls.form-inputs')
    }
    get name() {
        return $('#name')
    }
    get email() {
        return $('#email')
    }
    get subject() {
        return $('#subject')
    }
    get comment() {
        return $('#comment')
    }
    get submitBtn() {
        return $('input[type= "submit"]')
    }


    formIsVisible() {
        this.signInForm.waitForExist()
    }
    fillForm(name, email, subject, comment) {
        this.name.waitForExist()
        this.name.setValue(name)
        this.email.waitForExist()
        this.email.setValue(email)
        this.subject.waitForExist()
        this.subject.setValue(subject)
        this.comment.waitForExist()
        this.comment.setValue(comment)
    }
    submitForm(){
        this.submitBtn.waitForExist()
        this.submitBtn.click()
    }


}
export default new FeedbackPage()
