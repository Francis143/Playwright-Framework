Feature:Login

 Background:
Given User launches the adactin

Scenario Outline:Login adactin with valid username and password
When User enters valid username and password
And User clicks Login Button
And User enters values in '<location>','<Hotel>'

Examples:

|location|Hotel|
|Sydney  |Hotel Creek|