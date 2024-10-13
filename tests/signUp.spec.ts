import { test } from '../fixtures/fixtures';
import { HomePageTS } from '../pages/homePage/homePageTS';
import { SignUpPageTS } from '../pages/signUP/signUpTS';
import { signUpFieldsData } from '../test-data/signUpData';
import { SignUpField } from '../types/signUpTypes';

test.describe('Tests for sign up modal', async () => {


  test('Sign up form can be accessed from home page @smoke', async ({ page }) => {

    const homePage = new HomePageTS(page)
    const signUpPage = new SignUpPageTS(page)
    
    await homePage.goToPage('/')
    await homePage.assertPageisOpenedCorrectly()
    await homePage.clickOnSignUpButton()

    await signUpPage.assertPageisOpenedCorrectly()
  });

  test.describe('Sigh up form validation', async () => {

    test.beforeEach(async ({page}) => {
      const homePage = new HomePageTS(page)
      const signUpPage = new SignUpPageTS(page)
      await homePage.goToPage('/')
      await homePage.assertPageisOpenedCorrectly()
      await homePage.clickOnSignUpButton()
      await signUpPage.assertPageisOpenedCorrectly()
    })

    test('fill all form fields with correct values, click signup button, expect response codes', async ({ page }) => {

      const homePage = new HomePageTS(page)
      const signUpPage = new SignUpPageTS(page)
      const integrityStatusCode = 200
      const protected_registerStatusCode = 400
      const dataFields: SignUpField[] = signUpFieldsData

      await signUpPage.expectSignUpButtonIsDisabled()
      await signUpPage.clickUseEmailButton()
      await signUpPage.fillAllFields(dataFields)
      await signUpPage.expectSignUpButtonIsActive()
      await signUpPage.expectSignUpRequstsHaveStatusCode(integrityStatusCode, protected_registerStatusCode)
    });

  })

})
