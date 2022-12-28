class WelcomePage{
    goToRegister(){
        return cy.xpath("//button[@class='button-1 register-button']")
    }
}
export default WelcomePage