import{short, mediu, long} from '../lib/timeouts'
describe('Browser Actions',() => {
    // it('Inputing',() => {
    //     browser.url('https://devexpress.github.io/testcafe/example/')
    //     const inputBtn = $('#developer-name')
    //     inputBtn.waitForExist()
    //     inputBtn.setValue('andra')
    //     browser.pause(short)
    //     inputBtn.clearValue()
    //     browser.pause(short)
    //     inputBtn.addValue('andra')
    //     browser.pause(short)
        
        
    // })
    // it('Click', () => {
    //     const populateBtn = $('#populate')
    //     populateBtn.waitForExist()
    //     populateBtn.click()
    //     populateBtn.doubleClick()
    // })
    // it('Checkbox ad radio btn', () => {
    //     browser.url('https://devexpress.github.io/testcafe/example/')
    //     const radioBtnLin = $('#linux')
    //     radioBtnLin.waitForExist()
    //     radioBtnLin.click()
    //     browser.pause(short)
    //     const checkBox1 = $('#remote-testing')
    //     checkBox1.waitForExist()
    //     checkBox1.click()
    //     browser.pause(short)
    // } )
    it('Select Box', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const selBox = $('#preferred-interface')
        selBox.waitForExist()
        selBox.selectByVisibleText('JavaScript API')
        browser.pause(mediu)

    })
})