it('Read from CSV', () => {
    cy.task('readFromCsv').then((result) => {
        cy.log(result)
        cy.log(result[0].LastName)

        cy.task('writeToCsv', {
                name: 'temp',
                rows: result
            })
    })
})

it.only('write to same csv file', () => {
    cy.task('readFromCsv').then((result) => {
        cy.log(result)
        result.push({
            LastName: 'test',
            FirstName: 'test',
            Age: 1
        })
        cy.task('writeToCsv', {
            name: 'myCsv',
            rows: result
        })
    })
})


it('Write to a file', ()=>{
    cy.writeFile('firstTest.csv', 'hello \n')
    cy.writeFile('firstTest.csv', 'superHello',{flag:'a+'})

    cy.writeFile('cypress/fixtures/Test2.json', {
        name: 'test',
        password: 'test'
    })

})

it('Read from a file', () => {
    cy.readFile('cypress/fixtures/Test2.json').then((result) => {
        cy.log(result)
        expect(result.name).to.equal('test')
    })
})

it('Create, write and read from csv file', () => {
    cy.writeFile('firstTest.csv', 'hello \n')
    cy.readFile('firstTest.csv').then((result) => {
        cy.log(result)
        expect(result).to.equal('hello \n')
    })
})

it('Read from a csv file', () => {
    cy.readFile('firstTest.csv').then((result) => {
        cy.log(result)

    })
})
