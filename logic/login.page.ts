import { Page } from '@playwright/test';

class LoginPage {
  page: Page;

  constructor(page) {
    this.page = page;
  }

  get email() {
    return this.page.locator('[data-qa="login-email"]');
  }

  get password() {
    return this.page.locator('[data-qa="login-password"]');
  }

  get submit() {
    return this.page.locator('[data-qa="login-button"]');
  }

  get logout() {
    return this.page.locator('a[href="/logout"]');
  }

  get login() {
    return this.page.locator('a[href="/login"]');
  }
}

export { LoginPage };
