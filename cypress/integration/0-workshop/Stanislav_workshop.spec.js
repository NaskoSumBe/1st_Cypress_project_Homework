/// <reference types="cypress" />




describe('testing', function() {
    it('testing1',function ()   {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login')
        .should('be.visible')//.should('be.enabled')        
        cy.get('.login').click()
        cy.get('#email_create').clear().click().type('stan@gmail.com')
        
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('MasterStenly', { delay: 100 })
        cy.get('#customer_lastname').type('MasterCypressStenly', { delay: 100 })
        cy.get('#passwd').type('123456')
        cy.get('#address1').type('Istochen 123')
        cy.get('#city').type('Plovdiv',{ delay: 200 })
        cy.get('#id_state').select([6])
        cy.get('#postcode').type('40040')
        cy.get('#id_country').select([1])
        cy.get('#phone_mobile').type('0888333444')
        cy.get('#alias').clear().type('Peshtersko')
        cy.get('#submitAccount > span').click() //------------------------------
    })    

    describe.only('7products', () => {
        beforeEach(() => {
            cy.visit('http://automationpractice.com/index.php')
        })
        
    it('Show 7 products from "Popular" feature', function () {
        
        cy.get('.active > .homefeatured').click()
        cy.get(".homefeatured").find('li').its('length').should('eq', 7)
    })


    it('Show 7 products from "Best Seller feature', function () {
        
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').click()
        cy.get(".blockbestsellers").find('li').its('length').should('eq', 7)
    })

})

})
