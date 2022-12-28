class LoginClass{
    getInputEmail(){
        return cy.xpath("//input[@id='Email']")
    }
    getInputPassword(){
        return cy.xpath("//input[@id='Password']")
    }
}
export default LoginClass