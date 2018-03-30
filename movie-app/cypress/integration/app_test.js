describe('Movie App Test', function () {
    it('Should be live and navbar should have correct links that work', function () {
        cy.visit('http://localhost:8080/#/')
        cy.get('nav div ul li').should('have.length', 3)
        cy.get('nav div ul li').eq(0).should('contain', 'Home')
        cy.get('nav div ul li').eq(1).should('contain', 'Favorites')
        cy.get('nav div ul li').eq(2).should('contain', 'Brochure')
        cy.get('nav div ul li').eq(2).click()
        cy.url().should('include', '/bro')
        cy.get('nav div ul li').eq(1).click()
        cy.url().should('include', '/fav')
        cy.get('nav div ul li').eq(0).click()
        cy.url().should('include', '/#')


    })
    it('Should have a form and a button', function () {
        cy.visit('http://localhost:8080/#/')
        cy.get('form').should('exist')
        cy.get('form button').should('exist')
        cy.get('form button').click()
    })
    it('Should generate posters when search topic is submitted to form', function () {
        cy.visit('http://localhost:8080/#/')
        cy.get('form').find('input').eq(0).type('star wars')
        cy.get('form button').click() 
        cy.get('div #movie-card').should('exist')
    })
    it('Should add posters to favorites page', function () {
        cy.visit('http://localhost:8080/#/')
        cy.get('form').find('input').eq(0).type('star wars')
        cy.get('form button').click() 
        cy.get('.card-body a').eq(0).click()
        cy.get('nav div ul li').eq(1).click()
        cy.get('div #movie-card').should('exist')
    })
    it('Should post an opinion of movie collection when clicked', function () {
        cy.visit('http://localhost:8080/#/')
        cy.get('nav div ul li').eq(1).click()
        cy.get('button').eq(2).click()
        cy.get('h5').should('exist')
        cy.get('p').should('exist')
    })
})