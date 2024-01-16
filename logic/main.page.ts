import { Page } from '@playwright/test';

class MainPage {
  page: Page;

  constructor(page) {
    this.page = page;
  }

  get login() {
    return this.page.locator('a[href="/login"]');
  }

  loggedUser(name: string) {
    return this.page.locator('a').getByText(name);
  }
}

export { MainPage };
