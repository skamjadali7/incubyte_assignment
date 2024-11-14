import { Given,Then,When,And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../page_object/home_page'
import ProductPage from "../../page_object/product_page";
import CheckoutPage from "../../page_object/checkout_page";
const homepage = new HomePage()
const productpage = new ProductPage()
const checkoutpage = new CheckoutPage()

Given('I visit the home page',function(){
    homepage.visit()
})

Then('I login with credential',function(){
    homepage.login('incubyte@incubyte.com','Incubyte@123')
})

When('I click main menu',function(){
    homepage.mainMenuSelection("Men")
})

When('I click category menu',function(){
    homepage.categoriesMenuSelection('Jackets')
})

Then('I filter categories',function(){
    productpage.filterCategories('Style','Lightweight')
})

Then('I choose the product',function(){
    productpage.chooseProduct()
})

When('I go for add to cart of product',function(){
    productpage.addToCart('L','2')
})

Then('I navigated to checkout page',function(){
    checkoutpage.navigateCartPage()
})

Then('I fill shipping details',function(){
    cy.fixture('data').then((data)=>{
        checkoutpage.fillShippingAddress(
            data.email,
            data.firstName,
            data.lastName,
            data.streetName,
            data.cityName,
            data.regionName,
            data.pincode,
            data.countryName,
            data.phone,
            data.methodTitle
        )
    })
    
})

Then('I confirm shipping details',function(){
    checkoutpage.confirmCheckout()
})

