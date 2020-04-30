describe('Sample Cypress - Rest API',() => {

    it('Verify the api request for the given search string',() => {

        cy.request({
            method: 'get',
            followRedirect: false,
            url: 'https://food-cal-counter.herokuapp.com/api/food?q=Butter,%20with%20salt',

            headers: {
                accept: 'application/json'
            },
            response: []
        }).then((response) => {
            cy.log(response.body)
            assert.equal(response.status,200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('status','success')
        })

    })

})
