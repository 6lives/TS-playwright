import { test, expect } from '@playwright/test';
import {allure} from 'allure-playwright'


test.only('has title', async ({ page }) => {
  await allure.step(`Here we are opening the browser ${page.url}`, async () => {
     await page.goto('/');
    })
 
  await page.waitForTimeout(2 * 1000)
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
