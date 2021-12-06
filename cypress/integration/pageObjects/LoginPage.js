class LoginPage{

    emailAddressInput(){
        return cy.get('#email');
    }

    passwordInput(){
        return cy.get('#passwd');
    }

    signInButton(){
        return cy.get('#SubmitLogin');
    }

    login(){
        cy.fixture('LoginUser').then((user)=>{
            this.emailAddressInput().clear()
                .type(user.email);
            this.passwordInput().clear()
                .type(user.password);
        })
        this.signInButton().click({force:true});
    }

    loginAfterRegistration(){
        cy.get('@EmailId').then((eid)=>{
            this.emailAddressInput().type(eid);
        })
        cy.fixture('RegisterUserDetails').then((user)=>{
            this.passwordInput().type(user.password);
        })
        this.signInButton().click({force:true});
    }

    emailCreateInput(){
        return cy.get('#email_create');
    }

    newEmailAddress(){
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }

         const newEmail = "test_" + makeid(8) + '@testorg.com.au';
         
         this.emailCreateInput().type(newEmail);
         cy.wrap(newEmail).as('EmailId');
    }


}
export default LoginPage;