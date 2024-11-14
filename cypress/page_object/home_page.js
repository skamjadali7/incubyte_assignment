class HomePage {
    visit () {
        cy.visit('https://magento.softwaretestingboard.com/')
    }

    login (email,password) {
        cy.get('a[href*="login"]').first().click()
        cy.get('.block-customer-login').scrollIntoView()
        cy.get('#email').type(email)
        cy.get('#pass').type(password)
        cy.get('#send2').click()
    }

    mainMenuSelection (menuName) {
        cy.get('ul').find('a').contains(menuName).click()
    }

    categoriesMenuSelection (categoryName) {
        cy.get('.sidebar-main').scrollIntoView()
        cy.get('.item').find('a').contains(categoryName).click()
    }
}
export default HomePage