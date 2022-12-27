import SubmitClass from "../../support/SubmitClass";

const xpath = require('cypress-xpath')

const submitClass = new SubmitClass()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("TODO App > ", (defaultCommandTimeout=1000) => {
    it("Check First Child", () => {
        cy.viewport(1920,1080)
        cy.visit("https://demoqa.com/automation-practice-form")

        submitClass.getInputFirstName().type('Hanna')
        submitClass.getInputLastName().type('Ning')
        submitClass.getInputEmail().type('ninhhoa@gmail.com')
        submitClass.getInputGender().click({force:true})
        submitClass.getInputPhoneNumber().type('0987654321')
        submitClass.getInputDateOfBirth().click()
        submitClass.getSelectYearOfBirth().select('1994',{force:true})
        submitClass.getSelectMonthOfBirth().select('May',{force:true})
        submitClass.getSelectDayOfBirth().click()
        submitClass.getInputSubject().type('Math{enter}')
        submitClass.getInputHobbi().check({force:true})
        submitClass.getInputAddess().type('So 9, Duy Tan, Ha Noi')
        submitClass.selectState().type('NCR{enter}')
        submitClass.selectCity().type('Delhi{enter}')
        submitClass.clickSubmit().click()


    })
});