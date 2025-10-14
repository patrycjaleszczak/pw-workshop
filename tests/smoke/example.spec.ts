import { test, expect } from '@playwright/test';

test('landing page has Example Domain title and link', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/i);
  await expect(page.getByRole('link', { name: 'More information...' })).toBeVisible();
});
