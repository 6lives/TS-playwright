import { Page } from "@playwright/test";
import * as allure from "allure-js-commons"

export class BaseTS {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async goToPage(url: string): Promise<void> {
        await allure.step('Navigating to ${url}', async () => {
            await this.page.goto(url)
        })
    }
}