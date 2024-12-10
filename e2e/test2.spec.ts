import { test, expect } from '@playwright/test';

test('Render default taks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(3);
});
