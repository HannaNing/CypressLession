class SubmitClass{
    getInputFirstName(){
        return cy.xpath("//input[@id='firstName']")
    }
    getInputLastName(){
        return cy.xpath("//input[@id='lastName']")
    }
    getInputEmail(){
        return cy.xpath("//input[@id='userEmail']")
    }
    getInputGender(){
        return cy.xpath(`//input[@id='gender-radio-2' and @value = 'Female']`)
    }
    getInputPhoneNumber(){
        return cy.xpath("//input[@id='userNumber']")
    }
    getInputDateOfBirth(){
        return cy.xpath("//input[@id='dateOfBirthInput']")
    }
    getSelectYearOfBirth(){
        return cy.xpath("//select[@class='react-datepicker__year-select']")
    }
    getSelectMonthOfBirth(){
        return cy.xpath("//select[@class='react-datepicker__month-select']")
    }
    getSelectDayOfBirth(){
        return cy.xpath("//div[@class='react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend']")
    }
    getInputSubject(){
        return cy.xpath("//div[@class='subjects-auto-complete__control css-yk16xz-control']")
    }
    getInputHobbi(){
        return cy.xpath("//input[@id='hobbies-checkbox-3']")
    }
    getInputAddress(){
        return cy.xpath("//textarea[@id='currentAddress']")
    }
    selectState(){
        return cy.xpath("//div[@id='state']")
    }
    selectCity(){
        return cy.xpath("//div[@id='city']")
    }
    clickSubmit(){
        return cy.xpath("//button[@id='submit']")
    }

}
export default SubmitClass