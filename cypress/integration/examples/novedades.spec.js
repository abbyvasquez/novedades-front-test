describe('Novedades de recogidas', function () {
    beforeEach(function(){
      cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
      cy.get('#mat-input-0').type('pruebas')
      cy.get('#mat-input-1').type('pruebas')
      cy.get('.mat-icon').click()
      cy.get('.app-button').click()
    })
    it('Novedades superiores - Cruzar contra faltante CM', function () {
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098240')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante CM').wait(2000).click()
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Cruzar contra faltante cliente', function () {
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098240')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante cliente').wait(2000).click()
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Devolver/cambio destino', function () {
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098239')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Devolver/cambio destino').wait(2000).click()
    cy.get('input[name="name"]').click().type('name')
    cy.get('input[name="lastName"]').click().type('lastName')
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Entregar sobrante a destinatario', function () {
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098248')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Entregar sobrante a destinatario').wait(2000).click()
    cy.get('input[name="name"]').click().type('name')
    cy.get('input[name="lastName"]').click().type('lastName')
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })
  it('Novedades Inferiores  - Cliente no despacho', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cliente no despachó').wait(2000).click()
    cy.get('input[name="name"]').click().type('name1')
    cy.get('input[name="lastName"]').click().type('lastName1')
    cy.get('#mat-input-2').type('Comentarios1')
    cy.get('.app-button').click()

  })
  it('Novedades Inferiores  - Cerrado por el Cliente', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrado por el cliente').wait(2000).click()
    cy.get('input[name="name"]').click().type('name2')
    cy.get('input[name="lastName"]').click().type('lastName2')
    cy.get('#mat-input-2').type('Comentarios2')
    cy.get('.app-button').click()

  })

  it('Novedades Inferiores  - Cerrar a Futura reclamación', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrar a futura reclamación').wait(2000).click()
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').click().type('Comentarios3')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - Generar notificación de mercancía afectada', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Generar notificación de mercancía afectada').wait(2000).click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios4')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - Cerrado por incidencia', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrado por incidencia').wait(2000).click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios5')
    cy.get('.app-button').click()
  })
  it('Novedades Inferiores  - Cruzar con sobrante CM', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar con sobrante CM').wait(2000).click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios6')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - No fue posible leer las unidades', function () {
    cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098310')) {
        $el.find('button').first().click()
      }
    })
    cy.wait(2000)
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('No fue posible leer las unidades').wait(2000).click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios7')
    cy.get('.app-button').click()
  })

  it('Guia cero/Unidades cero', function () {
    cy.get('.dashboard-table').find('.clickable-element-row').contains('18 Sabaneta').click()
    cy.wait(1000)
    cy.get('.mat-button').click()
})

it('Novedades Superiores Cruzar contra faltante CM Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
      
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098281'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cruzar contra faltante CM').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario1')
  cy.get('.app-button').click()

})

  it('Detalle de la guia - Novedades Superiores Cruzar contra faltante cliente Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').wait(2000).click()
  
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098274'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cruzar contra faltante cliente').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario2')
  cy.get('.app-button').click()

}) 
      

  it('Detalle de la guia - Novedades Superiores Devolver/cambio destino Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
              
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').wait(2000).each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098274'))
  {
   $el.find('.parcel-number').wait(2000).click({force: true})
  }
}) 
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Devolver/cambio destino').wait(2000).click()
  cy.get('#mat-input-3').type('Nombre3')
  cy.get('#mat-input-4').type('Apellidos3')
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario3')
  cy.get('.app-button').click()

})
 
  it('Novedades Superiores Entregar sobrante a destinatario Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
        
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').wait(2000).each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('20025027613'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Entregar sobrante a destinatario').wait(2000).click()
  cy.wait(2000)
  cy.get('#mat-input-3').type('Nombre4')
  cy.get('#mat-input-4').type('Apellidos4')
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario4')
  cy.get('.app-button').click()

}) 
  
  it('Detalle de la guia - Novedades Inferiores Cerrado por el Cliente', function () {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
                        
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098310'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cerrado por el cliente').wait(2000).click()
  cy.wait(2000)
  cy.get('#mat-input-3').type('Nombre6')
  cy.get('#mat-input-4').type('Apellidos6')
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario6')
  cy.get('.app-button').click()
    
})   

  it('Detalle de la guia - Novedades Inferiores Cerrar a futura reclamación Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click({force: true})
                
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098310'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
              
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cerrar a futura reclamación').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario7')
  cy.get('.app-button').click()
    
 })

  it('Novedades Inferiores Generar notificación de mercancía afectada Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
                
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098310'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Generar notificación de mercancía afectada').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario8')
  cy.get('.app-button').click()
    
 })

  it('Detalle de la guia - Novedades Inferiores Cerrado por incidencia Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
                
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098310'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
              
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cerrado por incidencia').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').click().find('#mat-input-2').click().type('Comentario9')
  cy.get('.app-button').click()
    
 })

  it('Detalle de la guia - Novedades Inferiores Cruzar con sobrante CM  Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()
                
  cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098310'))
  {
    $el.find('.parcel-number').first().click()
  }
}) 
  
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('Cruzar con sobrante CM').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario10')
  cy.get('.app-button').click()
    
 })

 it('Detalle de la guia - Novedades Inferiores No fue posible leer las unidades Accion', function() {
  cy.get('.dashboard-table').find('.information-cell-team').contains('2 Centro').click()              
  cy.get('.novelties-index-container').wait(1000).find.wait(1000)('.novelty-colum').wait(1000).find('.list-novelty').wait(2000).find('.list-card-novelty').wait(2000).each(($el,index,$list)=>{  
  const NumberGuia=$el.find('h3.parcel-number').text()
  if (NumberGuia.includes('03200098309'))
  {
    $el.find('.parcel-number').first().wait(2000).click( {force: true})
  }
}) 
  cy.wait(2000)
  cy.get('.nav-actions').click()
  cy.get('.mat-menu-content').contains('No fue posible leer las unidades').wait(2000).click()
  cy.wait(2000)
  cy.get('.mat-form-field-flex').find('#mat-input-2').type('Comentario11')
  cy.get('.app-button').click()
 })
   
 after(function()
 {
 cy.get('.icon-go-back').click()
 cy.wait(2000)
 cy.get('.icon-go-back').click()
 cy.wait(2000)
 cy.get('.mat-icon').click()
 cy.wait(2000)
 cy.get('.account-menu').contains('Cerrar sesión').click()
 })

})





 



