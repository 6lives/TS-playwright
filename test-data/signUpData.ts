import { faker } from "@faker-js/faker";
import { SignUpField, SignUpFieldType } from "../types/signUpTypes";
import '@faker-js/faker'

export const signUpFieldsData: SignUpField[] = [
    { label: 'Create a username', value: faker.string.alphanumeric(14), type: SignUpFieldType.STRING },
    { label: 'Create a secure password', value: faker.internet.password(), type: SignUpFieldType.STRING },
    { label: 'Select your birthday month', value: 2, type: SignUpFieldType.SELECT },
    { label: 'Select your birthday day', value: 4, type: SignUpFieldType.SELECT },
    { label: 'Select your birthday year', value: faker.date.birthdate({ mode: 'age', min: 20, max: 50 }).getFullYear(), type: SignUpFieldType.SELECT },
    { label: 'Enter your email address', value: faker.internet.email({ provider: 'gmail.com' }), type: SignUpFieldType.STRING },
  ]