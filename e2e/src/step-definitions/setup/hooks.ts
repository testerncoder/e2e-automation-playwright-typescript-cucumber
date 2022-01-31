import { Before, BeforeAll, After, AfterAll } from '@cucumber/cucumber' // Step Definition Hooks
const { chromium } = require('playwright')

BeforeAll(async () => {
    global.browser = await chromium.launch({ headless: false }) // Launch browser
})

Before(async (scenario) => {
    global.context = await global.browser.newContext({
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        },
    }) // Create new context for each scenario
    global.page = await global.context.newPage() // Create new page
})

After(async (scenario) => {
    const scenarioStatus = scenario.result?.status
    if (scenarioStatus === 'FAILED') {
        await global.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`,
        }) // Take screenshot on failure
    }
    await global.page.close() // Close page
})

AfterAll(async () => {
    await global.browser.close() // Close browser
})
