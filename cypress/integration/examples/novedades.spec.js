describe('Novedades de recogidas', function() {
    it('Novedades superiores', function() {
    cy.visit("https://app-dot-cm-novedades-checkpoint-dev.appspot.com/#/login");
    cy.get('#mat-input-0').type('catalinaa')
    cy.get('#mat-input-1').type('Camilo12')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.mat-select-placeholder').wait(3000).click()
    cy.get('#mat-option-0').click()
 
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).each(($el,index,$list)=>{  
    const textVeg=$el.find('h3.parcel-number').text()
        if (textVeg.includes('20025027564'))
        {$el.find('button').click()}
        cy.get('.mat-menu-content > div.ng-star-inserted > :nth-child(1)')
      })
     })
  })