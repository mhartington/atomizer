import { test, expect } from '@playwright/test';

test('Load first page', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await expect(page).toHaveTitle(/Atomizer/);
});

test('Render default taks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(3);
});

test('Change to completed tasks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.waitForURL('/todos?q=completed');

  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(0);
});

test('Change to all tasks', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'All' }).click();
  await page.waitForURL('/todos?q=all');

  const listItems = page.locator('app-todos').getByRole('listitem');
  await expect(listItems).toHaveCount(3);
});

