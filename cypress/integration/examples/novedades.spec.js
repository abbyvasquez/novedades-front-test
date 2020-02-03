describe('Novedades de recogidas', function() {

    it('Novedades superiores - Cruzar contra faltante CM', function() {
    cy.visit("https://app-dot-cm-novedades-checkpoint-dev.appspot.com/#/login");
    cy.get('#mat-input-0').type('olgav')
    cy.get('#mat-input-1').type('olgav')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.mat-select-placeholder').wait(2000).click()
    cy.get('#mat-option-0').click()
 
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
    const NumberGuia=$el.find('h3.parcel-number').text()
        if (NumberGuia.includes('20025027564'))
        {
         $el.find('button').first().click()
        }
      })
      cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante CM').click()
     })

     it('Novedades superiores - Cruzar contra faltante cliente', function() {
      cy.visit("https://app-dot-cm-novedades-checkpoint-dev.appspot.com/#/login");
      cy.get('#mat-input-0').type('olgav')
      cy.get('#mat-input-1').type('olgav')
      cy.get('.mat-icon').click()
      cy.get('.app-button').click()
      cy.get('.mat-select-placeholder').wait(2000).click()
      cy.get('#mat-option-0').click()
   
      cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
      const NumberGuia=$el.find('h3.parcel-number').text()
          if (NumberGuia.includes('20025027564'))
          {
           $el.find('button').first().click()
          }
        })
        cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante cliente').click()  
       })

       it('Novedades superiores - Devolver/cambio destino', function() {
        cy.visit("https://app-dot-cm-novedades-checkpoint-dev.appspot.com/#/login");
        cy.get('#mat-input-0').type('olgav')
        cy.get('#mat-input-1').type('olgav')
        cy.get('.mat-icon').click()
        cy.get('.app-button').click()
        cy.get('.mat-select-placeholder').wait(2000).click()
        cy.get('#mat-option-0').click()
     
        cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
        const NumberGuia=$el.find('h3.parcel-number').text()
            if (NumberGuia.includes('20025027564'))
            {
             $el.find('button').first().click()
            }
          })
          cy.get('.mat-menu-content').find('.mat-menu-item').contains('Devolver/cambio destino').click()  
         })


         it('Novedades superiores - Entregar sobrante a destinatario', function() {
          cy.visit("https://app-dot-cm-novedades-checkpoint-dev.appspot.com/#/login");
          cy.get('#mat-input-0').type('olgav')
          cy.get('#mat-input-1').type('olgav')
          cy.get('.mat-icon').click()
          cy.get('.app-button').click()
          cy.get('.mat-select-placeholder').wait(2000).click()
          cy.get('#mat-option-0').click()
       
          cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
          const NumberGuia=$el.find('h3.parcel-number').text()
              if (NumberGuia.includes('20025027564'))
              {
               $el.find('button').first().click()
              }
            })
            cy.get('.mat-menu-content').find('.mat-menu-item').contains('Entregar sobrante a destinatario').click()  
           })
    })