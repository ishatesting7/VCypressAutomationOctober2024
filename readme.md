Cypress Folder Structure
------------------------
cypress
    - downloads - Files such as screenshot, videos 
    - e2e - Managing TESTCASEs - Regression, Smoke and Sanity 
        - payment
            - TC01
            - TC02
            - TC03
        - merchant
        - verify
        - config
    - fixtures - By default cypress support JSON file - TestData (CSV, JSON, TXT, XLS, XLSX)
    - support - Managing your dependency - xpath, iframe

Locators
--------

- Cypress has default support for CSS Selector
    - Whenever we have class name, Then the css selector will be .Classname
    - Whenever we have id, Then the css selector will be #id
    - TagName[attribute = 'value']
    - [attribute = 'value']
    - Traversing


- Cypress has support for XPATH (Using plugin)

- Plugin URL -
    - SelectorHub - https://chromewebstore.google.com/detail/selectorshub-xpath-helper/ndgimibanhlabgdgjcpbbndiehljcpfh


<ul class="list-inline" xpath="1">
   <li><a href="https://tutorialsninja.com/demo/index.php?route=information/contact"><i class="fa fa-phone"></i></a> <span class="hidden-xs hidden-sm hidden-md">123456789</span></li>
   <li class="dropdown open">
      <a href="https://tutorialsninja.com/demo/index.php?route=account/account" title="My Account" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-user"></i> <span class="hidden-xs hidden-sm hidden-md">My Account</span> <span class="caret"></span></a>
      <ul class="dropdown-menu dropdown-menu-right">
         <li><a href="https://tutorialsninja.com/demo/index.php?route=account/register">Register</a></li>
         <li><a href="https://tutorialsninja.com/demo/index.php?route=account/login">Login</a></li>
      </ul>
   </li>
   <li><a href="https://tutorialsninja.com/demo/index.php?route=account/wishlist" id="wishlist-total" title="Wish List (0)"><i class="fa fa-heart"></i> <span class="hidden-xs hidden-sm hidden-md">Wish List (0)</span></a></li>
   <li><a href="https://tutorialsninja.com/demo/index.php?route=checkout/cart" title="Shopping Cart"><i class="fa fa-shopping-cart"></i> <span class="hidden-xs hidden-sm hidden-md">Shopping Cart</span></a></li>
   <li><a href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout" title="Checkout"><i class="fa fa-share"></i> <span class="hidden-xs hidden-sm hidden-md">Checkout</span></a></li>
</ul>



<TagName attribute = 'value' attribute2 = 'value2'/>



Commands
--------

cy.get() - It will accept only css selector

cy.visit() - It will help us to navigate to the new url

cy.wait() - It is halting your execution. It accept time in millisecond


CSS Selector -
------------
1. [class="oxd-input oxd-input--active"] 
2. [name="username"]
3. [placeholder="Username"]
4. input[class="oxd-input oxd-input--active"] 
5. input[name="username"]
6. input[placeholder="Username"]
7. .oxd-input.oxd-input--active
8. .oxd-form > div:nth-child(2) > div > div:nth-child(2)
9. form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)
