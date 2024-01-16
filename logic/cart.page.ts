import { Page } from '@playwright/test';
import { Navigation } from './navigation';

class CartPage {
  page: Page;

  navigation: Navigation;

  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
  }

  cartLength() {
    return this.page.getByRole('row').count();
  }

  async removeCartItems() {
    if (await this.isCartEmpty()) {
      return;
    }
    await this.page.locator('a[class="cart_quantity_delete"]').nth(0).click();
    await this.page.waitForTimeout(1000);
    await this.removeCartItems();
  }

  isCartEmpty() {
    return this.page.getByText('Cart is empty!').isVisible();
  }
}

export { CartPage };
