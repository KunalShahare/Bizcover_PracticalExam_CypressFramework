/// <reference types ="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../integration/pageObjects/LoginPage";
import MyAccountPage from "../../integration/pageObjects/MyAccountPage";
import NavigationPage from "../../integration/pageObjects/NavigationPage";
import UserRegistrationPage from "../../integration/pageObjects/UserRegistrationPage";

const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();
const navigationPage = new NavigationPage();
const userRegistrationPage = new UserRegistrationPage();

When('I register new user with valid email address',()=>{
    navigationPage.navigateToLoginPage();
    loginPage.newEmailAddress();
    navigationPage.navigateToUserRegistrationPage();
    userRegistrationPage.registerUser();
})

Then('I should be redirected to my Account Page after successful user registration',()=>{
    cy.fixture('RegisterUserDetails').then((user)=>{
        myAccountPage.accountName().should('contain', user.firstname + ' ' + user.lastname);
    })
    myAccountPage.myAccountTab().should('have.text', 'My account');
    navigationPage.navigateToMyPersonalInformationPage();
    myAccountPage.validateEmailInPersonalInformation();
    navigationPage.signOutButton().should('exist')
        .should('contain', 'Sign out');
})

Then('I should be able to login with the new user credentials',()=>{
    navigationPage.navigatetoLoginPageAfterSignOut();
    loginPage.loginAfterRegistration();
    navigationPage.navigateToMyPersonalInformationPage();
    myAccountPage.validateEmailInPersonalInformation();
})