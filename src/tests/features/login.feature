Feature:Login

    Background:
        Given User launches the adactin

    Scenario Outline:Login adactin with valid username and password
        When User enters valid username and password
        And User clicks Login Button
        And User enters values in '<location>','<Hotel>','<Room type>','<NumberofRooms>'
        And User enters '<check in date>' and '<check out date>'
        And User enters below details '<AdultsperRoom>' and '<childrenperRoom>'
        And User clicks search button
        Then User clicks radio button
        And User clicks continue button
        When User enters '<firstname>' and '<lastname>' and '<billing address>'
        And User enters '<credit card number>'
        And User selects '<credit card type>'
        And User selects expiry '<month>' and expiry '<year>'
        And User enters '<cvv number>' in the text box
        And User clicks book now button
        Then User gets the order id


        Examples:

            | location | Hotel       | Room type | NumberofRooms | check in date | check out date | AdultsperRoom | childrenperRoom | firstname | lastname | billing address | credit card number | credit card type | month | year | cvv number         |
            | Sydney   | Hotel Creek | Standard  | 2 - Two       | 30/04/2024    | 1/05/2024      | 2 - Two       | 3 - Three       | Francis   | s        | chennai         | 123456789123456789 | VISA             | May   | 2024 | 123456789123456789 |