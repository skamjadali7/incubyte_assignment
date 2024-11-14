class CheckoutPage {
    navigateCartPage () {
        cy.get('a[href*="/checkout/cart"]',{timeout:5000}).eq(0).click()
        cy.get('#top-cart-btn-checkout',{timeout:5000}).click()
    }

    selectShippingMethod (methodTitle) {
        cy.get('.table-checkout-shipping-method tbody .row').contains(methodTitle)
        .parents('tr').find('input[type="radio"]').click()
    }
    fillShippingAddress (...args) {
        cy.get('#customer-email',{timeout:10000}).type(email) // 10 sec page load confirmation
        cy.get('[name="firstname"]').type(firstName)
        cy.get('[name="lastname"]').type(lastName)
        cy.get('[name="street[0]"]').type(streetName)
        cy.get('[name="city"]').type(cityName)
        cy.get('select').eq(0).select(regionName)
        cy.get('[name="postcode"]').type(pincode)
        cy.get('select').eq(1).select(countryName)
        cy.get('[name="telephone"]').type(phone)
        cy.get('#checkout-step-shipping_method').scrollIntoView()
        this.selectShippingMethod(methodTitle)
    }

    confirmCheckout () {
        cy.get('.checkout-shipping-address', { timeout: 10000 }).should('be.visible');
        cy.contains('button','Next').click({force:true})
        cy.contains('Payment Method').should('be.visible')
        cy.get('.billing-address-details').should('be.visible')
        cy.contains('Order Summary').should('be.visible')
        cy.get('[title="Place Order"]').click()
        cy.contains('Thank you for your purchase!',{timeout:10000}).should('be.visible') // 10 sec page load confirmation
        cy.get('.checkout-success p').contains('Your order # is:')
        .find('span').should('not.be.empty')
    }
}
export default CheckoutPage