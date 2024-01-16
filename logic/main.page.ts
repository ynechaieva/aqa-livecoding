import { Page } from '@playwright/test';
import { Navigation } from './navigation';

class MainPage {
  page: Page;

  navigation: Navigation;

  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
  }

  loggedUser(name: string) {
    return this.page.locator('a').getByText(name);
  }
}

export { MainPage };
