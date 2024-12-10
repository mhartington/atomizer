import { test, expect } from '@playwright/test';

test('Load first page', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await expect(page).toHaveTitle(/Atomizer/);
});
