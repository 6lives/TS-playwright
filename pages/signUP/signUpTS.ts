import { expect, Page } from "@playwright/test";
import { SignUpPagePO } from "./signUpPO";
import * as allure from "allure-js-commons"
import { SignUpField, SignUpFieldType } from "../../types/signUpTypes";

export class SignUpPageTS {
    private page: Page
    private signUpPagePo: SignUpPagePO

    constructor(page: Page) {
        this.page = page
        this.signUpPagePo = new SignUpPagePO(this.page)
    }

    async assertPageisOpenedCorrectly() {
        await allure.step('Assert that page is opened', async () => {
            await expect(await this.signUpPagePo.pageTitle().textContent()).toEqual(this.signUpPagePo.title)
        })
    }

    async expectSignUpButtonIsDisabled() {
        await allure.step('Assert that sign up button is disabled when required fields is not filled', async () => {
            await expect(this.signUpPagePo.signUpButton()).toBeVisible()
            await expect(this.signUpPagePo.signUpButton()).toBeDisabled()
        })
    }

    async expectSignUpButtonIsActive() {
        await allure.step('Assert that sign up button is active when required fields is filled', async () => {
            await expect(this.signUpPagePo.signUpButton()).toBeVisible()
            await expect(this.signUpPagePo.signUpButton()).not.toBeDisabled()
        })
    }

    async fillAllFields(fields: SignUpField[]) {
        await allure.step(`Filling fields: [${fields.map((field) => field.label)}]`, async () => {
            for (const field of fields) {
                switch (field.type) {
                    case SignUpFieldType.STRING: {
                        await this.fillInputField(field)
                        break
                    }
                    case SignUpFieldType.SELECT: {
                        await this.selectValue(field)
                        break
                    }
                }
            }
        })

    }

    private async fillInputField(field: SignUpField) {
        await allure.step(`Filling field ${field.label} with value ${field.value}`, async () => {
            await this.signUpPagePo.stringAndSelectField(field.label).fill(field.value.toString())
        })
    }

    private async selectValue(field: SignUpField) {
        await allure.step(`Selecting value: ${field.value} for field ${field.label}`, async () => {
            await this.signUpPagePo.stringAndSelectField(field.label).selectOption({ value: field.value.toString() })
        })
    }

    async clickOnSignUpButton() {
        await allure.step('Click on SignUp button', async () => {
            await expect(this.signUpPagePo.signUpButton()).toBeVisible()
            await this.signUpPagePo.signUpButton().click()
        })
    }

    async clickUseEmailButton() {
        await allure.step('Click on "use email instead" button', async () => {
            await expect(this.signUpPagePo.useEmail()).toBeVisible()
            await this.signUpPagePo.useEmail().click()
        })
    }

    async expectSignUpRequstsHaveStatusCode(integrityStatusCode: number, protected_registerStatusCode: number) {
        await allure.step(`Assert that sign up response status codes are: ${[integrityStatusCode, protected_registerStatusCode]}`, async () => {

            const intergrityPromise = this.page.waitForResponse('https://passport.twitch.tv/integrity')
            const protected_registerPromise = this.page.waitForResponse('https://passport.twitch.tv/protected_register')
            
            await this.clickOnSignUpButton()
            const integrityResponse = await intergrityPromise
            const protected_registerResponse = await protected_registerPromise
            
            expect(integrityResponse.status()).toEqual(integrityStatusCode)
            expect(protected_registerResponse.status()).toEqual(protected_registerStatusCode)
        })
    }

}
