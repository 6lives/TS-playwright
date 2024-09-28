import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class HomePagePO extends BasePage {
    title: string = 'Twitch'
    constructor(page: Page) {
        super(page)
    }

    homePageTitle = () => this.page.locator('//title')
    signUpButton = () => this.page.getByRole('button', {exact: true, name: 'Sign Up'}).first()
}