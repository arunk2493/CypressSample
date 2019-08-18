describe('Sample Cypress',() => {

    let search = "Butter, with salt"

    it('Get the values from the specified Row',() => {
        cy.visit('https://food-cal-counter.herokuapp.com/')
        cy.get('.prompt').type("Butter")
        cy.get('#food-search > table > tbody > tr:nth-child(2) > td').each(($li, index, $lis) => {
            return 'something else'
        })
            .then(($lis) => {
                cy.log($lis.text())
            })
    })

    it('Get all the values from the Row',() => {
        cy.visit('https://food-cal-counter.herokuapp.com/')
        cy.get('.prompt').type("Butter")
        cy.get('#food-search > table > tbody > tr > td').each(($li, index, $lis) => {
            return 'something else'
        })
            .then(($lis) => {
                cy.log($lis.text())
            })
    })

    it('Verify the search string added value at the top',() => {
        cy.visit('https://food-cal-counter.herokuapp.com/')
        cy.get('.prompt').type(search)
        cy.get('#food-search > table > tbody > tr').should('have.length',2)
        cy.get('#food-search > table > tbody > tr:nth-child(1) > td:nth-child(1)').click()
        cy.get('#food-search > table > tbody > tr:nth-child(1) > td:nth-child(1)').each(($li, index, $lis) => {
            return 'something else'
        })
            .then(($lis) => {
                cy.log($lis.text())
                expect($lis.text()).equal('Butter, with salt') // true
                cy.get('#root > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').contains(search)

            })
    })

    it('Verify the clear search functionality',() => {
        cy.visit('https://food-cal-counter.herokuapp.com/')
        cy.get('.prompt').type(search)
        Cypress.$(0)
        cy.get('#food-search > table > tbody > tr').should('have.length',0)

    })
})
