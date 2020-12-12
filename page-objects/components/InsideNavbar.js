import Base from '../Base'
class InsideNavbar extends Base {

    get activityTab() {
        return $('#account_activity_tab')
    }
    get filtersLink() {
        return $('a[href="#ui-tabs-2"]')
    }
    
    

    clickActivityTab() {
        this.activityTab.waitForExist()
        this.activityTab.click()
    }
    clickFiltersLink() {
        this.filtersLink.waitForExist()
        this.filtersLink.click()
    }
    
    
}
export default new InsideNavbar()