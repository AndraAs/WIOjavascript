
describe('E2E Tests - Search', () => {
    it('Should load on page', () =>{
        browser.url('http://zero.webappsecurity.com/')
        const search=$('#searchTerm')
        search.waitForExist()
    })
    it('Should submit searchbox', () => {
        const search=$('#searchTerm')
        search.setValue('bank')
        browser.keys('Enter')
        const resultsTitle=$('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})