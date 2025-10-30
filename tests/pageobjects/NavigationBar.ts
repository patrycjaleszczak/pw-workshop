import { Locator, Page } from "@playwright/test";

export class NavigationBar {
    readonly wholeNavigationBar: Locator;

    constructor(page: Page) {
        this.wholeNavigationBar = page.locator('nav[role="navigation"]');
    }

    async isWholeNavigationBarVisible(): Promise<boolean> {
        return await this.wholeNavigationBar.isVisible();
    }
}