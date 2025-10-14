import { Page, Locator } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}
  get docsLink(): Locator {
    return this.page.getByRole('link', { name: /More information/i });
  }
  async goto() { await this.page.goto('/'); }
}
