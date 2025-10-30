import { test, expect } from '@playwright/test';
import { NavigationBar } from '../pageobjects/navigationBar';

test('Check if the navigation bar is visible', async ({ page }) => {
  const navigationBar = new NavigationBar(page);
  await page.goto('https://cleeng.com/');
  await expect(page).toHaveTitle("Cleeng: Billing & Subscription Management for D2C");
  expect(await navigationBar.isWholeNavigationBarVisible(), "Navigation bar is missing from the homepage").toBe(true);
});
