describe('Novedades de recogidas', function () {

  it('Novedades superiores - Cruzar contra faltante CM', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098240')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante CM').click()
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Cruzar contra faltante cliente', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098242')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar contra faltante cliente').click()
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Devolver/cambio destino', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098239')) {
        $el.find('button').first().click()
      }
    })

    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Devolver/cambio destino').click()
    cy.get('input[name="name"]').click().type('name')
    cy.get('input[name="lastName"]').click().type('lastName')
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })

  it('Novedades superiores - Entregar sobrante a destinatario', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.clickable-element-row').contains(' 77 Envigado Centro Integral City Plaza ').click()
    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098244')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Entregar sobrante a destinatario').click()
    cy.get('input[name="name"]').click().type('name')
    cy.get('input[name="lastName"]').click().type('lastName')
    cy.get('#mat-input-2').click().type('comentario')
    cy.get('.app-button').click()
  })
  it('Novedades Inferiores  - Cliente no despacho', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098249')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cliente no despachó').click()

    cy.get('input[name="name"]').click().type('name1')
    cy.get('input[name="lastName"]').click().type('lastName1')
    cy.get('#mat-input-2').type('Comentarios1')
    cy.get('.app-button').click()

  })
  it('Novedades Inferiores  - Cerrado por el Cliente', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098250')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrado por el cliente').click()
    cy.get('input[name="name"]').click().type('name2')
    cy.get('input[name="lastName"]').click().type('lastName2')
    cy.get('#mat-input-2').type('Comentarios2')
    cy.get('.app-button').click()

  })

  it('Novedades Inferiores  - Cerrar a Futura reclamación', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098251')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrar a futura reclamación').click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios3')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - Generar notificación de mercancía afectada', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098252')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Generar notificación de mercancía afectada').click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios4')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - Cerrado por incidencia', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098249')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cerrado por incidencia').click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios5')
    cy.get('.app-button').click()
  })
  it('Novedades Inferiores  - Cruzar con sobrante CM', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098250')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('Cruzar con sobrante CM').click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios6')
    cy.get('.app-button').click()
  })

  it('Novedades Inferiores  - No fue posible leer las unidades', function () {
    cy.visit("https://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login");
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.information-cell-team').contains('77 Envigado Centro Integral City Plaza').click()

    cy.get('.novelties-index-container').find('.novelty-colum').find('.list-novelty').wait(2000).find('.list-card-novelty').each(($el, index, $list) => {
      const NumberGuia = $el.find('h3.parcel-number').text()
      if (NumberGuia.includes('03200098251')) {
        $el.find('button').first().click()
      }
    })
    cy.get('.mat-menu-content').find('.mat-menu-item').contains('No fue posible leer las unidades').click()
    cy.wait(2000)
    cy.get('.solutions-dialog-create_content').find('#mat-input-2').type('Comentarios7')
    cy.get('.app-button').click()
  })

  it('Guia cero/Unidades cero', function () {
    cy.visit('http://app-dot-cm-novedades-checkpoint-test.appspot.com/#/login');
    cy.get('#mat-input-0').type('pruebas')
    cy.get('#mat-input-1').type('pruebas')
    cy.get('.mat-icon').click()
    cy.get('.app-button').click()
    cy.get('.dashboard-table').find('.clickable-element-row').contains('18 Sabaneta').click()
    cy.wait(1000)
    cy.get('.mat-button').click()

  })

})