/// <reference types ="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../integration/pageObjects/LoginPage";
import MyAccountPage from "../../integration/pageObjects/MyAccountPage";
import NavigationPage from "../../integration/pageObjects/NavigationPage";

const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();
const navigationPage = new NavigationPage();

Given('I am in the home page of the system',()=>{
    navigationPage.navigateToHomePage();
})

When('I enter my username and password',()=>{
    navigationPage.navigateToLoginPage();
    loginPage.login();
})

Then('I should be redirected to my Account Page',()=>{
    myAccountPage.accountName().should('contain', 'Kunal Shahare');
    myAccountPage.myAccountTab().should('have.text', 'My account');
})