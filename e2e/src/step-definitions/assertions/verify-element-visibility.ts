import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async (elementKey: string, expectedElementText: string) => {
        console.log(
            `the ${elementKey} should contain the text ${expectedElementText}`,
        )
        const helloSignIn_Text_Locator = await global.page.textContent(
            '#nav-link-accountList-nav-line-1',
        )
        expect(helloSignIn_Text_Locator).toBe(expectedElementText)
    },
)

Then(/^the "([^"]*)" should be displayed$/, async (elementKey: string) => {
    console.log(`the ${elementKey} should be displayed`)
    const logo_Locator = await global.page.$('#nav-logo-sprites')
    expect(logo_Locator).toBeVisible()
})
