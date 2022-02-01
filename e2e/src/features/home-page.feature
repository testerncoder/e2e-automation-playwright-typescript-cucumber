Feature: As a user I expect to be able to navigate to the home page.

    @dev
    @smoke
    @regression
    Scenario: As a user I expect to be able to navigate to the Logo and Header items
        Given I am on the "home" page
        Then the "header" should contain the text "Hello, Sign in"
        And the "header logo" should be displayed
