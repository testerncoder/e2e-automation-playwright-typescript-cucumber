import playwright, {
  Browser,
  Page,
  BrowserContextOptions,
  BrowserContext,
  BrowserType,
} from "playwright";

import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";

export type Screen = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};

export class ScenarioWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }

  screen!: Screen;

  async init(contextOptions?: BrowserContextOptions): Promise<Screen> {
    await this.screen?.browser.close();
    await this.screen?.context.close();
    await this.screen?.page.close();

    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();

    this.screen = { browser, context, page };
    return this.screen;
  }

  private newBrowser = async (): Promise<Browser> => {
    const automationBrowsers = ["chromium", "firefox", "webkit"] as const;
    type AutomationBrowser = typeof automationBrowsers[number];
    const automationBrowser = process.env.BROWSER as AutomationBrowser;

    const BrowserType: BrowserType = playwright[automationBrowser];
    const browser = await playwright[automationBrowser].launch({
      headless: process.env.HEADLESS !== "false",
      args: [
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
      ],
    });

    return browser;
  };
}
