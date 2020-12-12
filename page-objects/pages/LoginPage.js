import Base from '../Base'

class LoginPage extends Base {
    get loginForm() {
        return $('#login_form')
    }

    get userInput() {
        return $('#user_login')
    }

    get pswdInput() {
        return $('#user_password')
    }

    get submitBtn() {
        return $('input[type= "submit"]')
    }
    get errorMsg() {
        return $('.alert.alert-error')
    }
    submitBtnIsVisible() {
        this.submitBtn.waitForExist()
    }
    formIsVisible() {
        this.loginForm.waitForExist()
    }
    userInputIsVisible() {
        this.userInput.waitForExist()
    }
    pswdInputIsVisible() {
        this.pswdInput.waitForExist()
    }

    fillForm(username,password) {
        this.userInput.setValue(username)
        this.pswdInput.setValue(password)
    }
    submitForm() {
        this.submitBtn.click()
    }
    login(username, password) {
        this.loginForm.waitForExist()
        this.userInput.setValue(username)
        this.pswdInput.setValue(password)
        this.submitBtn.click()
    }

}
export default new LoginPage()