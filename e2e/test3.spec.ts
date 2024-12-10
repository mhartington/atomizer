import { test, expect } from '@playwright/test';

test('Change to completed tasks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.waitForURL('/todos?q=completed');

  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(0);
});
