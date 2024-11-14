class ProductPage {
    constructor (){
        this.productDetails =[]
    }
    filterCategories (filterName,optionName) {
        cy.contains('[data-role="title"]',filterName).click({force:true})
        cy.get('.filter-options-content ol').find('a').contains(optionName).click()
    }

    // Not using this in below add to cart method it need modification
    productNamePriceCapture () {
        return cy.get('.product-item').first().then(($product)=>{
            cy.wrap($product).find('.product-item-link').first().invoke('text').then((productName)=>{
                cy.wrap($product).find('.price').first().invoke('text').then((productPrice)=>{
                    const price = parseFloat(productPrice.trim())
                    this.productDetails.push({
                        name:productName.trim(),
                        price:price
                    })
                })
            })
        })
    }

    chooseProduct () {
        cy.get('.product-item').first().click()
    }

    selectSize (sizeLabel) {
        return cy.get('.swatch-attribute-options .swatch-option.text')
        .contains(sizeLabel)
        .click()
    }

    selectColor () {
        cy.get('.swatch-attribute-options .swatch-option.color').first().click()
    }

    selectQuantity (qty) {
        cy.get('#qty').clear().type(qty)
    }

    addToCart (sizeLabel,qty) {
        this.selectSize(sizeLabel)
        this.selectColor()
        this.selectQuantity(qty)
        /*this.productNamePriceCapture().then((ele)=>{
            expect(ele).to.eq(this.productDetails())
        }) */
        cy.contains('button','Add to Cart').click({force:true})
        cy.wait(10000) // 10 sec not good to use for time being using it
    }

}
export default ProductPage