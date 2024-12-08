
let userId;

it('Add a new user using API', () => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            "name": "Sam",
            "job": "QA"
        }
    }).then((response)=>{
        expect(response.status).to.equal(201);
        expect(response.body).to.not.be.null;
        expect(response.body.name).to.equal('Sam');
        expect(response.body.job).to.equal('QA');
        userId = response.body.id
    })
})

it('Update user details with id', () => {
    cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/' + userId,
        body: {
            "name": "Sam",
            "job": "QA LEad"
        }
    }).then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.null;
        expect(response.body.name).to.equal('Sam');
        expect(response.body.job).to.equal('QA LEad');
    })
})

it('Delete user with id', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/' + userId
    }).then((response)=>{
        expect(response.status).to.equal(204);
    })
})
