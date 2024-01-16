import { Page } from '@playwright/test';

class Navigation {
  page: Page;

  constructor(page) {
    this.page = page;
  }

  get login() {
    return this.page.locator('a[href="/login"]');
  }

  get home() {
    return this.page.locator('a[href="/"]').first();
  }

  get products() {
    return this.page.locator('a[href="/products"]');
  }

  get cart() {
    return this.page.locator('a[href="/view_cart"]').first();
  }
}

export { Navigation };
