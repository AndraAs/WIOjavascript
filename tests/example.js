import {short, medium, long} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devices'
describe('First steps with webdriverio',() => {
    it('Load Example Website',() => {
        browser.url('https://www.example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('https://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')        
    })
    it('H1 should be visible', () => {
        // Get selector and save it to variable
        // Do assertion
        const header = $('h1')
        header.waitForExist()
        expect(header).toBeVisible
    })
    it('P tag is visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible
    })
    it('Check link value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
    it('Get element text', () => {
        const text= $('h1').getText()
        const elem = $('h1')
        elem.waitForExist()
        expect(elem).toHaveText('Example Domain')
    })
    it('Assert attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const element = $('#submit-button')
        element.waitForExist()
        expect(element).toHaveAttrContaining('type', 'submit') 
    })
    it('Assert value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })
    it('Save screenshot', () => {
        browser.saveScreenshot('andra.png')
    })
    it('Change browser view port', () => {
        browser.setWindowSize(800, 600)
        browser.pause(long)
    })
    it('Set mobile view', () => {
        browser.setWindowSize(mobile[0],mobile[1])
        browser.pause(short)
    })
    it('Set tablet view', () => {
        browser.setWindowSize(tablet[0],tablet[1])
        browser.pause(short)
    })
    it('Set desktop view', () => {
        browser.setWindowSize(desktop[0],desktop[1])
        browser.pause(short)
    })
    
})


