import { expect, Page } from "@playwright/test";
import { HomePagePO } from "./homePagePO";
import * as allure from "allure-js-commons";
import { BaseTS } from "../baseTS";

export class HomePageTS extends BaseTS {
    private homePagePo: HomePagePO

    constructor(page: Page) {
        super(page)
        this.homePagePo = new HomePagePO(this.page)
    }

    async assertPageisOpenedCorrectly() {
        await allure.step('Assert that page is opened', async () => {
           await expect(await this.homePagePo.homePageTitle().textContent()).toEqual(this.homePagePo.title)
        })
    }

    async clickOnSignUpButton() {
        await allure.step('Click on SignUp button', async () => {
            await expect(this.homePagePo.signUpButton()).toBeVisible()
            await this.homePagePo.signUpButton().click()

        })
    }

}
