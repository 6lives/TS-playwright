import { test } from '../fixtures/fixtures';
import { HomePageTS } from '../pages/homePage/homePageTS';
import { faker } from "@faker-js/faker"
import { SignUpField, SignUpFieldType } from '../types/signUpTypes';
import { SignUpPageTS } from '../pages/signUP/signUpTS';

test.describe('Tests for sign up modal', async () => {

  const fields: SignUpField[] = [
    {label: 'Create a username', value: faker.string.alphanumeric(14), type: SignUpFieldType.STRING},
    {label: 'Create a secure password', value: faker.internet.password(), type: SignUpFieldType.STRING},
    {label: 'Select your birthday month', value: 2, type: SignUpFieldType.SELECT},
    {label: 'Select your birthday day', value: 4, type: SignUpFieldType.SELECT},
    {label: 'Select your birthday year', value: faker.date.birthdate({mode: 'age', min: 20, max: 50}).getFullYear(), type: SignUpFieldType.SELECT},
    {label: 'Enter your email address', value: faker.internet.email({provider: 'gmail.com'}), type: SignUpFieldType.STRING},
  ]

  test.beforeEach( async ({page}) => {
    await page.goto('/')
  })
  
  test('Open twitch sign up form and complete it', async ({ page }) => {
  
    const homePage = new HomePageTS(page)
    const signUpPage = new SignUpPageTS(page)
  
    await homePage.assertPageisOpenedCorrectly()
    await homePage.clickOnSignUpButton()

    await signUpPage.assertPageisOpenedCorrectly()
    await signUpPage.expectSignUpButtonIsDisabled()
    await signUpPage.clickUseEmailButton()
    await signUpPage.fillAllFields(fields)
    await signUpPage.expectSignUpButtonIsActive()
    await signUpPage.clickOnSignUpButton()
  
    await page.waitForTimeout(10 * 1000)
  });
})

