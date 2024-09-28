import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { PassThrough } from "stream";

export class SignUpPagePO extends BasePage {
    title: string = 'Join Twitch today'
    constructor(page: Page) {
        super(page)
    }

    pageTitle = () => this.page.getByRole('heading', {name: this.title, exact: true})
    // username = () => this.page.getByLabel('Create a username', {exact: true})
    // password = () => this.page.getByLabel('Create a secure password')
    // dobMonth = () => this.page.getByLabel('Select your birthday month', {exact: true})
    // dobDay = () => this.page.getByLabel('Select your birthday day', {exact: true})
    // dobYear = () => this.page.getByLabel('Select your birthday year', {exact: true})
    // email = () => this.page.getByLabel('Enter your email address', {exact: true})
    useEmail = () => this.page.getByRole('button', {name: 'Use email instead', exact: true})
    signUpButton = () => this.page.getByTestId('passport-signup-button')
    stringAndSelectField = (label: string) => this.page.getByLabel(label)
}
