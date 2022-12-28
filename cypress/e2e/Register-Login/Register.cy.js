import RegisterClass from "../../support/RegisterClass";
import WelcomePage from "../../support/WelcomPage";
import LoginClass from "../../support/LoginClass";

const xpath = require('cypress-xpath')

const registerClass = new RegisterClass()
const welcomePage = new WelcomePage()
const loginPage = new LoginClass()


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe ("nopCommerce", (defaultCommandTimeout=1000)=>{
    it("Check Register account", ()=>{
        cy.viewport(1920,1080)
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        welcomePage.goToRegister().click()

        //Your Personal Details
        registerClass.getInputGenderFemale().click()
        registerClass.getInputFirstName().type("Hoa")
        registerClass.getInputLastName().type("Ninh Thi")
        registerClass.selectDayOfBirth().select("1",{force:true})
        registerClass.selectMonthOfBirth().select("May",{force:true})
        registerClass.selectYearOfBirth().select("1994",{force:true})
        registerClass.getInputEmail().type("nthoa@cmcglobal.vn")

        // const dateAfterMail = Date.now()
        // return now.toISOString()

        //Company details
        registerClass.getInputCompanyName().type("CMC Global")

        //Options
        registerClass.selectNewsletter().check({force:true})

        //Your password
        registerClass.getInputPassword().type("Cmc@1234")
        registerClass.getInputConfirmPassword().type("Cmc@1234")

        registerClass.registerButton().click()
        registerClass.registerMessageShow().should("Your registration completed")
        }
    )
    it('Check Login ', function () {
        cy.viewport(1920,1080)
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

        loginPage.getInputEmail().type("nthoa@cmc@gmail.com")
        loginPage.getInputPassword().type("Cmc@1234")
    });

})