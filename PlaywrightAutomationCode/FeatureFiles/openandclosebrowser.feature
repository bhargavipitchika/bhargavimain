Feature: it is the name of the module/big functionality

Scenario: launch the browser and close page

Given launch the browser

And close the browser

Scenario Outline:  launch the Gmail page

Given launch the browser
Then open the url of Gmail
And close the browser

    