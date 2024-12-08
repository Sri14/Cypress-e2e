it('Get all products list', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2'
    }).then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.null;
        expect(response.body.data.email).to.equal('janet.weaver@reqres.in');
        let name = response.body.data.first_name;
        cy.log(name)
    })
})


