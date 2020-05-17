const assert = require('assert')

describe('Test google login func.', () => {
    it('Should verify user is in gmail login page', () => {
        browser.url('https://google.com')
        const title = browser.getTitle()
        console.log(title)
        assert.strictEqual(title, 'Google')
        const link = $('=Gmail')
        link.waitForExist()
        link.click()
    })
})