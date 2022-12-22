const xpath = require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("TODO App > ", () => {
    it("Check First Child", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(5000)

        cy.xpath("//input[@id='firstName']").type('Hanna')
        cy.xpath("//input[@id='lastName']").type('Ning')
        cy.xpath("//input[@id='userEmail']").type('ninhhoa@gmail.com')
        cy.xpath("//input[@id='gender-radio-2']").should('be.checked')
        cy.xpath("//input[@id='userNumber']").type('0987654321')
        cy.xpath("//input[@id='dateOfBirthInput']").type('01 May 1994')
        cy.xpath("//div[@class='subjects-auto-complete__control css-yk16xz-control']").type('Math')
        cy.xpath("//label[@for='hobbies-checkbox-3']").should('be.checked')
        cy.xpath("//textarea[@id='currentAddress']").type('So 9, Duy Tan, Ha Noi')
        cy.xpath("//div[@class='css-1wa3eu0-placeholder']").click()
        cy.xpath("//div[@class='css-1uccc91-singleValue']").click()

        cy.xpath("//div[@class='css-yk16xz-control']").click()
        cy.xpath("//div[@class=' css-1uccc91-singleValue']").click()

    })
});