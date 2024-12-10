import { test, expect } from '@playwright/test';

test('Change to all tasks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'All' }).click();
  await page.waitForURL('/todos?q=all');

  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(3);
});

