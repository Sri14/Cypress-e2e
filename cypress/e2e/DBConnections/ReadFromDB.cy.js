it('Database test', () => {
  cy.task('READFROMDB',
      {
          dbConfig: Cypress.config('DB'),
          sql: 'select * from "users"'
  }).then((result)=>{
    console.log(result.rows)
    console.log(result.rows[0].FirstName)

  })
})

it('Insert new data', ()=>{
    cy.task('READFROMDB',{
      dbConfig: Cypress.config('DB'),
      sql: `INSERT into public.users("LastName", "FirstName", "Age") VALUES ('Drive', 'Tom' ,35);`
    })
})

it.only('Delete all data', ()=>{
  cy.task('READFROMDB',{
    dbConfig: Cypress.config('DB'),
    sql: `Delete from public.users`
  })
})
