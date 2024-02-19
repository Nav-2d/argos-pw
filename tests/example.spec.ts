import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test('screenshot homepage', async ({ page }) => {
  await page.goto('https://argos-ci.com/docs/getting-started');
  await argosScreenshot(page, 'homepage');
});
