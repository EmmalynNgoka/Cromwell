
Feature: Category Page

    Scenario: Verify ten prodcts is dispalyed

        Given user is on the category page
        When no further options are clicked
        Then ten products should be displayed

    Scenario: Verify 25 prodcts is displayed (pagination)

        Given user is on the category page
        When the user changes 'Rows per page:' to 25
        Then 25 products should be displayed

    Scenario: Verify Out of stock is displayed

        Given user is on the category page
        When the user changes 'Rows per page:' to 25
        And user has clicked 'Show Out of Stock'
        Then check there is atleast one product that show 'OUT OF STOCK' in the results

    Scenario: Verify Sort by order of price (low to high)

        Given user is on the category page
        When the user the user selects 'Sort By' - 'Price Low to High'
        Then 10 products should be displayed in order of price '(low to high)'