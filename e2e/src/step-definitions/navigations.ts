import { Given } from '@cucumber/cucumber'

Given(/^I am on the home page$/, async () => {
    console.log('I am on the home page')
    await global.page.goto('https://www.amazon.com.au/')
})
