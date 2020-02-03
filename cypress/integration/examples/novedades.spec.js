describe('Novedades de recogidas', function() {

    it('Novedades superiores - Cruzar contra faltante CM', function() {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
     cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
 
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
    const NumberGuia=$el.find('h3.parcel-number').text()
        if (NumberGuia.includes('03200098240'))
        {
         $el.find('button').first().click()
        }
      })
      cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante CM').click()
      cy.get('#mat-input-2').click().type('comentario')
      cy.get('.app-button').click()
    })

     it('Novedades superiores - Cruzar contra faltante cliente', function() {
      cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
      cy.get('#mat-input-0').type('pruebas')
      cy.get('#mat-input-1').type('pruebas')
      cy.get('.mat-icon').click()
      cy.get('.app-button').click()
      cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()   
      cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
      const NumberGuia=$el.find('h3.parcel-number').text()
          if (NumberGuia.includes('03200098242'))
          {
           $el.find('button').first().click()
          }
        })
        cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante cliente').click()
        cy.get('#mat-input-2').click().type('comentario')
        cy.get('.app-button').click()
       })

       it('Novedades superiores - Devolver/cambio destino', function() {
        cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
        cy.get('#mat-input-0').type('pruebas')
        cy.get('#mat-input-1').type('pruebas')
        cy.get('.mat-icon').click()
        cy.get('.app-button').click()
        cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()     
        cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
        const NumberGuia=$el.find('h3.parcel-number').text()
            if (NumberGuia.includes('03200098239'))
            {
             $el.find('button').first().click()
            }
          })
          
          cy.get('.mat-menu-content').find('.mat-menu-item').contains('Devolver/cambio destino').click()  
          cy.get('input[name="name"]').click().type('name')
          cy.get('input[name="lastName"]').click().type('lastName')         
          cy.get('#mat-input-2').click().type('comentario')
          cy.get('.app-button').click()
        })

         it('Novedades superiores - Entregar sobrante a destinatario', function() {
          cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
          cy.get('#mat-input-0').type('pruebas')
          cy.get('#mat-input-1').type('pruebas')
          cy.get('.mat-icon').click()
          cy.get('.app-button').click()
          cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()       
          cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
          const NumberGuia=$el.find('h3.parcel-number').text()
              if (NumberGuia.includes('03200098244'))
              {
               $el.find('button').first().click()
              }
            })
            cy.get('.mat-menu-content').find('.mat-menu-item').contains('Entregar sobrante a destinatario').click()  
            cy.get('input[name="name"]').click().type('name')
            cy.get('input[name="lastName"]').click().type('lastName')
            cy.get('#mat-input-2').click().type('comentario')
            cy.get('.app-button').click()
          })
    })