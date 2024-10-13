import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  workers: process.env.WORKERS ? Number(process.env.WORKERS) : undefined,
  reporter: [['html'], ["line"], ["allure-playwright"]],
  use: {
    testIdAttribute: 'data-a-target',
    baseURL: 'https://www.twitch.tv',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
    },
  ],
});
