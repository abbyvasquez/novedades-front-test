describe('My First Test Suite', function() {
  it('My First test case', function() 
{
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.get('.search-keyword').type('ca');
  cy.wait(2000);
  cy.get('.product:visible').should('have.length',4)
  cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
  cy.get('.products').find('.product').each(($el,index,$list)=>{
    const textVeg=$el.find('h4.product-name').text()
      if (textVeg.includes('Cashews'))
      {$el.find('button').click()}
    })
  
  cy.get(':nth-child(1) > .product-action > button').click()
  
  cy.get('.products').as('productLocator')
  cy.get('@productLocator').find('.product').each(($el,index,$list)=>{
    const textVeg=$el.find('h4.product-name').text()
      if (textVeg.includes('Cashews'))
      {$el.find('button').click()}
    })
  cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })
})

it('My Second test case', function() {
  cy.visit("http://localhost:3001/detail");
  cy.get('.btn').click();
  cy.get('#PERCENT_FUNCIONALIDAD').type('20');
  cy.get('#PERCENT_CONFIABILIDAD').type('10');
  cy.get('#PERCENT_USABILIDAD').type('20');
  cy.get('#PERCENT_SEGURIDAD').type('10');
  cy.get('#PERCENT_MANTENIBILIDAD').type('10');
  cy.get('#PERCENT_PERFORMANCE').type('10');
  cy.get('#PERCENT_PORTABILIDAD').type('20'); 
  })
})