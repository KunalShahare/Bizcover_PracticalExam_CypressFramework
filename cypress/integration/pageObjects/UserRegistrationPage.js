class UserRegistrationPage{

    selectTitleMr(){
        return cy.get('#id_gender1');
    }

    selectTitleMrs(){
        return cy.get('#id_gender2');
    }

    userFirstName(){
        return cy.get('#customer_firstname');
    }

    userLastName(){
        return cy.get('#customer_lastname');
    }

    userEmail(){
        return cy.get('#email');
    }

    userPassword(){
        return cy.get('#passwd');
    }

    userDateOfBirthDays(){
        return cy.get('#days');
    }

    userDateOfBirthMonth(){
        return cy.get('#months');
    }

    userDateOfBirthYear(){
        return cy.get('#years');
    }

    signUpNewsLetterCheckbox(){
        return cy.get('#newsletter');
    }

    receiveSpecialOffersCheckbox(){
        return cy.get('#optin');
    }

    addressFirstName(){
        return cy.get('#firstname');
    }

    addressLastName(){
        return cy.get('#lastname');
    }

    addressCompanyName(){
        return cy.get('#company');
    }

    addressLine1(){
        return cy.get('#address1');
    }

    addressLine2(){
        return cy.get('#address2');
    }

    addressCity(){
        return cy.get('#city')
    }

    addressState(){
        return cy.get('#id_state');
    }

    addressPostcode(){
        return cy.get('#postcode');
    }

    addressCountry(){
        return cy.get('#id_country');
    }

    additionalInformation(){
        return cy.get('#other');
    }

    homePhone(){
        return cy.get('#phone');
    }

    mobilePhone(){
        return cy.get('#phone_mobile');
    }

    addressAlias(){
        return cy.get('#alias');
    }

    registerButton(){
        return cy.get('#submitAccount');
    }

    registerUser(){
        cy.fixture('RegisterUserDetails').then((user)=>{
            cy.selectTitle(user.title);
            this.userFirstName().type(user.firstname);
            this.userLastName().type(user.lastname);
            this.userPassword().type(user.password);
            this.userDateOfBirthDays().select(user.dobday);
            this.userDateOfBirthMonth().select(user.dobmonth);
            this.userDateOfBirthYear().select(user.dobyear);
            this.addressCompanyName().type(user.company);
            this.addressLine1().type(user.addressline1);
            this.addressCity().type(user.city);
            this.addressState().select(user.state);
            this.addressPostcode().type(user.postalcode);
            this.mobilePhone().type(user.mobilephone);
        })

        this.registerButton().click();
    }
}
export default UserRegistrationPage;