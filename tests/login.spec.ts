import { expect, test } from '@playwright/test';
import { LoginPage } from '../logic/login.page';
import { MainPage } from '../logic/main.page';

test('User can login', async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);

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
  await expect(loginPage.logout).toBeVisible();
});
