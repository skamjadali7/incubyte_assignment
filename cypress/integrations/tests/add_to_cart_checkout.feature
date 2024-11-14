Feature: Add a Jacket to the cart and checkout

    Scenario: Add a jacket to the cart and proceed to checkout
        Given I visit the home page
        Then I login with credential
        When I click main menu
        When I click category menu
        Then I filter categories
        And I choose the product
        When I go for add to cart of product
        Then I navigated to checkout page
        And I confirm shipping details