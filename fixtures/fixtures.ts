import { test as base } from '@playwright/test';

export const test = base.extend<{ page: any }>({
    page: async ({ page }, use) => {
      let page1 = page
      await use(page1);
    },
  });
