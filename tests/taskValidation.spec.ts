import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import testCases from '../node_modules/data/testCases.json';

test.describe('Task Validation Tests', () => {
  for (const testCase of testCases) {
    test(`Validate task: "${testCase.task}" in ${testCase.project}`, async ({ page }) => {
      await login(page);

      // Navigate to the project
      await page.click(`text=${testCase.project}`);

      // Select the correct column
      const column = page.locator(`div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4:has(h2:text("${testCase.column}"))`);
      await expect(column).toBeVisible();

      // Check if the task is in the column
      const taskCard = column.locator(`div.bg-white:has(h3:text-is("${testCase.task}"))`);
      await expect(taskCard).toBeVisible();

      // Check tags
      for (const tag of testCase.tags) {
      await expect(taskCard.locator('span', { hasText: tag })).toBeVisible();
    }
    });
  }
});
