import { Page } from '@playwright/test';
import { Navigation } from '../logic/navigation';

class ProductsPage {
  page: Page;

  navigation: Navigation;

  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
  }

  get continueShopping() {
    return this.page.getByText('Continue Shopping');
  }

  get goToCart() {
    return this.page.getByRole('link', { name: 'View Cart' });
  }

  getProductById(id: number) {
    return this.page
      .locator(`.productinfo > a[data-product-id="${id}"]`)
      .first();
  }
}

export { ProductsPage };
