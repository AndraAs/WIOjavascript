import Base from '../Base'
class FiltersPage extends Base {

    get description() {
        return $('#aa_description')
    }
    get findBtn(){
        return $('.btn.btn-primary')
    }
    get resultsTable() {
        return $('#filtered_transactions_for_account')
    }
    get message() {
        return $('.well')
    }
    fillDescription(description) {
        this.description.waitForExist()
        this.description.setValue(description)
    }
    clickFindBtn() {
        this.findBtn.waitForExist()
        this.findBtn.click()
    }
    resultTableIsVisible() {
        this.resultsTable.waitForExist()
    }
}
export default new FiltersPage()