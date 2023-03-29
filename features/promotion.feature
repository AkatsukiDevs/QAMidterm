Feature: Promotion Test
    Scenario: Create greetings promotion
        Given I am in the promotion page
        When I click a promotion
        And I click create greetings promotion
        And I input greetings promotion data
        And I click save
        Then I should see create success message