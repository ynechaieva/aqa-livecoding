import { expect, test } from '@playwright/test';
import { CartPage } from '../logic/cart.page';
import { LoginPage } from '../logic/login.page';
import { MainPage } from '../logic/main.page';
import { ProductsPage } from '../logic/products.page';

test.describe('Remove cart items', () => {
  let mainPage: MainPage;
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    // Open main page
    await page.goto('https://automationexercise.com/');

    // Click on login button
    await mainPage.navigation.login.click();

    // Fill email and password fields
    await loginPage.email.fill('site24x7.livecode@inbox.testmail.app');
    await loginPage.password.fill('TestUser123!!!!!');

    // Submit form
    await loginPage.submit.click();

    // Verify user is logged in
    await expect(mainPage.loggedUser('LiveCodeTestUser')).toBeVisible();

    await mainPage.navigation.cart.click();

    // Verify if cart is empty
    await cartPage.removeCartItems();

    // goto Main page
    await cartPage.navigation.home.click();
  });

  test('Remove cart items', async () => {
    await mainPage.navigation.products.click();
    await productsPage.getProductById(1).click();
    await productsPage.continueShopping.click();

    await productsPage.getProductById(2).click();
    await productsPage.goToCart.click();

    // cartLength - 1 just to exclude header, need to be fixed
    expect((await cartPage.cartLength()) - 1).toEqual(2);

    await cartPage.removeCartItems();
    expect(await cartPage.isCartEmpty()).toBeTruthy();
  });
});
