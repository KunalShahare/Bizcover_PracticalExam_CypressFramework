// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import UserRegistrationPage from '../integration/pageObjects/UserRegistrationPage';

const userRegistrationPage = new UserRegistrationPage;
Cypress.Commands.add('selectTitle', (title) => {
    if(title == 'Mr'){
        userRegistrationPage.selectTitleMr().click();
    }else if(title == 'Mrs'){
        userRegistrationPage.selectTitleMrs().click();
    }
})


