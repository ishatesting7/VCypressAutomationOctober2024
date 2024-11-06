/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import lambdahomepage from "../../Pages/TestGridLoginPage/TestBStackCheckoutPage.cy";


Given("User navigate to home page", () => {

   lambdahomepage.enterUrl();
    });

Then("Validate the menu option", () => {
        lambdahomepage.validateMenuOptions();
         });

Then("Validate the icon on home page", () => {
    lambdahomepage.ValidateIcons();
});