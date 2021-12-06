class MyAccountPage{

    accountName(){
        return cy.get('.account');
    }

    myAccountTab(){
        return cy.get('.navigation_page');
    }

    myPersonalInformationEmail(){
        return cy.get('#email');    
    }

    validateEmailInPersonalInformation(){
        cy.get('@EmailId').then((eid)=>{
            this.myPersonalInformationEmail().should('have.value', eid);
        })
    }

   
}
export default MyAccountPage;