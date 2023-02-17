import { expect, test } from '@playwright/test';

test('web', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Hello World');
});
