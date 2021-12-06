class NavigationPage{

    navigateToHomePage(){
        cy.visit('');
    }

    signInButton(){
        return cy.get('.login');
    }

    navigateToLoginPage(){
        this.signInButton().click();
    }

    createAccountButton(){
        return cy.get('#SubmitCreate');
    }

    navigateToUserRegistrationPage(){
        this.createAccountButton().click();
    }

    myPersonalInformation(){
        return cy.get('.myaccount-link-list > :nth-child(4) > a > span');
    }

    navigateToMyPersonalInformationPage(){
        this.myPersonalInformation().click();   
    }

    signOutButton(){
        return cy.get('.logout');
    }

    navigatetoLoginPageAfterSignOut(){
        this.signOutButton().click();
    }
}
export default NavigationPage;