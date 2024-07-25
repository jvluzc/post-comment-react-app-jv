describe('Testando funcionalidade de comentários em uma rede social', () => {
    it('Comentar em um publica e depois apagar o comentário', () => {
      cy.visit('localhost:5173/555454543444444444444444444444444444444444444444')
      cy.get('[data-qa="profile-box"]')
      cy.get('[data-qa="comment-input"]').first().type('LEGAL GOSTEI DA PÚBLICAÇÃO - TESTE')
      cy.get('[data-qa="publish-button"]').eq(0).click()
      cy.get('[data-qa="comment-text"]').eq(1).contains('LEGAL GOSTEI DA PÚBLICAÇÃO - TESTE')
      cy.get('[data-qa="delete-button"]').eq(1).click()
    })
  })
  