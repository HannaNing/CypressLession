class RegisterClass{
    getInputGenderFemale(){
        return cy.xpath("//input[@id='gender-female']")
    }
    getInputFirstName(){
        return cy.xpath("//input[@id='FirstName']")
    }
    getInputLastName(){
        return cy.xpath("//input[@id='LastName']")
    }
    selectDayOfBirth(){
        return cy.xpath("//select[@name='DateOfBirthDay']")
    }
    selectMonthOfBirth(){
        return cy.xpath("//select[@name='DateOfBirthMonth']")
    }
    selectYearOfBirth(){
        return cy.xpath("//select[@name='DateOfBirthYear']")
    }
    getInputEmail(){
        return cy.xpath("//input[@id='Email']")
    }
    getInputCompanyName(){
        return cy.xpath("//input[@id='Company']")
    }
    selectNewsletter(){
        return cy.xpath("//input[@id='Newsletter']")
    }
    getInputPassword(){
        return cy.xpath("//input[@id='Password']")
    }
    getInputConfirmPassword(){
        return cy.xpath("//input[@id='ConfirmPassword']")
    }
    registerButton(){
        return cy.xpath("//button[@id='register-button']")
    }
    registerMessageShow(){
        return cy.xpath("//div[@class='result']")
    }
    loginOnHeader(){
        return cy.xpath("//a[@class='ico-login']")
    }

}
export default RegisterClass