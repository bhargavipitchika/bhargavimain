Feature: filters and alert

    Background: common steps
        Given I launch the browser
        
        @method1
    Scenario: verify playwright filters
        And I verify playwright filters
        And I close the browser

        @method1
    Scenario: verify simple alert
        And I verify simple alert
        And I close the browser
        @method1
    Scenario: verify confirmation alert ok
        And I verify confirmation alert ok
        #And I close the browser
        @method1
    Scenario: verify confirmation alert cancel
        And I verify confirmation alert cancel
        @method1
    Scenario: verify prompt alert without text ok
        And I verify prompt alert without text ok

        @method1
    Scenario: verify prompt alert with text ok
        And I verify prompt alert with text ok
    @method1
    Scenario: verify prompt alert cancel
        And I verify prompt alert cancel

