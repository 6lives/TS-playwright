# TS Playwright test-automation example project
This project implements 3 layers page object stucture:
 - PO (page object) layer - where the locators is written
 - TS (test steps) layer - where logical steps is written that are using PO's locators
 - test layer - where test cases is written. It is using TS to build up tests.

Allure report is also used in this project to build cool looking test reports and to be able to upload test results to Allure TestOps.

# How to run
1) install nodejs
2) install allure (e.g using any packet manager- ```brew install allure``` for mac) 
3) install npm (pnpm/npx)
4) clone repo
5) from the project root run
   ```bash
   npx i
   ```
   to install all dependencies
7) run
   ```bash
   npx playwright install
   ```
   to install all browsers (will be used to run tests)
9) run
   ```bash
   npx playwright test
   ```
   to run all tests or
   ```bash
   npx playwright test --headed
   ```
   to see how is test going in browser
11) run
   ```bash
   npx playwright show-report
   ```
   to open html playwright tests report
13) run
   ```bash
   allure-serve allure-results
   ```
   to build and open allure report

# Configuration

Settings can be changed in ```playwright.config.ts```
doc: https://playwright.dev/docs/test-configuration
