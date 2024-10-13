import { test as base, Page } from '@playwright/test'
import { authViaApi } from '../utils/api_calls';

interface Fixures {
  page: Page
  apiAuth: Page
}

export const test = base.extend<Fixures>({
    page: async ({ page }, use) => {
      await use(page);
    },
    apiAuth: async ({ browser }, use) => {
      const context = await browser.newContext()
      //calling auth endpoint, collecting cookies
      const cookies = await authViaApi()
      //appying to browser context
      await context.addCookies(cookies)
      const newPage = await context.newPage()
      
      await use(newPage)
    } 
  });
