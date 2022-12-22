/// <reference types="cypress-xpath" />
// import '@shelex/cypress-allure-plugin';
const xpath = require('cypress-xpath')

describe("TODO App > ", () => {
    it("Check First Child", () => {
        cy.visit("https://www.google.com/");
        cy.get('.gLFyf').type('BTS{enter}');
        cy.wait(2000);
        // cy.get("span[role='heading']").click()
        // cy.get("span[role='heading']").should('be.visible').then(($object) => {
        //     expect($object.text()).to.have.string('BTS')
        // })
        cy.xpath("//span[@role='heading']").should('be.visible').then(($object) => {
            expect($object.text()).to.have.string('BTS')
        })
    })
});