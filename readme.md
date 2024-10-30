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

DropDown
--------
- Static dropdown
- Dynamic dropdown
- Auto-Suggestion

- select Tag
- select Command - visibleText, index, value

<select id="zcf_address_country" class="globalcountrycode valid" name="CASECF7" data-zcqa="wbf-country"><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre And Miquelon">Saint Pierre And Miquelon</option><option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome And Principe">Sao Tome And Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Korea">South Korea</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Democratic Republic Of Congo">The Democratic Republic Of Congo</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks And Caicos Islands">Turks And Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican">Vatican</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis And Futuna">Wallis And Futuna</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="Åland Islands">Åland Islands</option></select>


<select id="zcf_address_country" class="globalcountrycode valid" name="CASECF7" data-zcqa="wbf-country">
   <option value="Afghanistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua and Barbuda">Antigua and Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Virgin Islands">British Virgin Islands</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option>
   <option value="Colombia">Colombia</option>
   <option value="Comoros">Comoros</option>
   <option value="Congo">Congo</option>
   <option value="Cook Islands">Cook Islands</option>
   <option value="Costa Rica">Costa Rica</option>
   <option value="Croatia">Croatia</option>
   <option value="Cuba">Cuba</option>
   <option value="Cyprus">Cyprus</option>
   <option value="Czech Republic">Czech Republic</option>
   <option value="Côte d'Ivoire">Côte d'Ivoire</option>
   <option value="Denmark">Denmark</option>
   <option value="Djibouti">Djibouti</option>
   <option value="Dominica">Dominica</option>
   <option value="Dominican Republic">Dominican Republic</option>
   <option value="Ecuador">Ecuador</option>
   <option value="Egypt">Egypt</option>
   <option value="El Salvador">El Salvador</option>
   <option value="Equatorial Guinea">Equatorial Guinea</option>
   <option value="Eritrea">Eritrea</option>
   <option value="Estonia">Estonia</option>
   <option value="Ethiopia">Ethiopia</option>
   <option value="Falkland Islands">Falkland Islands</option>
   <option value="Faroe Islands">Faroe Islands</option>
   <option value="Fiji">Fiji</option>
   <option value="Finland">Finland</option>
   <option value="France">France</option>
   <option value="French Guiana">French Guiana</option>
   <option value="French Polynesia">French Polynesia</option>
   <option value="Gabon">Gabon</option>
   <option value="Gambia">Gambia</option>
   <option value="Georgia">Georgia</option>
   <option value="Germany">Germany</option>
   <option value="Ghana">Ghana</option>
   <option value="Gibraltar">Gibraltar</option>
   <option value="Greece">Greece</option>
   <option value="Greenland">Greenland</option>
   <option value="Grenada">Grenada</option>
   <option value="Guadeloupe">Guadeloupe</option>
   <option value="Guam">Guam</option>
   <option value="Guatemala">Guatemala</option>
   <option value="Guinea">Guinea</option>
   <option value="Guinea-Bissau">Guinea-Bissau</option>
   <option value="Guyana">Guyana</option>
   <option value="Haiti">Haiti</option>
   <option value="Honduras">Honduras</option>
   <option value="Hong Kong">Hong Kong</option>
   <option value="Hungary">Hungary</option>
   <option value="Iceland">Iceland</option>
   <option value="India">India</option>
   <option value="Indonesia">Indonesia</option>
   <option value="Iran">Iran</option>
   <option value="Iraq">Iraq</option>
   <option value="Ireland">Ireland</option>
   <option value="Israel">Israel</option>
   <option value="Italy">Italy</option>
   <option value="Jamaica">Jamaica</option>
   <option value="Japan">Japan</option>
   <option value="Jordan">Jordan</option>
   <option value="Kazakhstan">Kazakhstan</option>
   <option value="Kenya">Kenya</option>
   <option value="Kiribati">Kiribati</option>
   <option value="Kosovo">Kosovo</option>
   <option value="Kuwait">Kuwait</option>
   <option value="Kyrgyzstan">Kyrgyzstan</option>
   <option value="Laos">Laos</option>
   <option value="Latvia">Latvia</option>
   <option value="Lebanon">Lebanon</option>
   <option value="Lesotho">Lesotho</option>
   <option value="Liberia">Liberia</option>
   <option value="Libya">Libya</option>
   <option value="Liechtenstein">Liechtenstein</option>
   <option value="Lithuania">Lithuania</option>
   <option value="Luxembourg">Luxembourg</option>
   <option value="Macao">Macao</option>
   <option value="Macedonia">Macedonia</option>
   <option value="Madagascar">Madagascar</option>
   <option value="Malawi">Malawi</option>
   <option value="Malaysia">Malaysia</option>
   <option value="Maldives">Maldives</option>
   <option value="Mali">Mali</option>
   <option value="Malta">Malta</option>
   <option value="Marshall Islands">Marshall Islands</option>
   <option value="Martinique">Martinique</option>
   <option value="Mauritania">Mauritania</option>
   <option value="Mauritius">Mauritius</option>
   <option value="Mexico">Mexico</option>
   <option value="Micronesia">Micronesia</option>
   <option value="Moldova">Moldova</option>
   <option value="Monaco">Monaco</option>
   <option value="Mongolia">Mongolia</option>
   <option value="Montenegro">Montenegro</option>
   <option value="Montserrat">Montserrat</option>
   <option value="Morocco">Morocco</option>
   <option value="Mozambique">Mozambique</option>
   <option value="Myanmar">Myanmar</option>
   <option value="Namibia">Namibia</option>
   <option value="Nauru">Nauru</option>
   <option value="Nepal">Nepal</option>
   <option value="Netherlands">Netherlands</option>
   <option value="Netherlands Antilles">Netherlands Antilles</option>
   <option value="New Caledonia">New Caledonia</option>
   <option value="New Zealand">New Zealand</option>
   <option value="Nicaragua">Nicaragua</option>
   <option value="Niger">Niger</option>
   <option value="Nigeria">Nigeria</option>
   <option value="Niue">Niue</option>
   <option value="North Korea">North Korea</option>
   <option value="Northern Mariana Islands">Northern Mariana Islands</option>
   <option value="Norway">Norway</option>
   <option value="Oman">Oman</option>
   <option value="Pakistan">Pakistan</option>
   <option value="Palau">Palau</option>
   <option value="Palestine">Palestine</option>
   <option value="Panama">Panama</option>
   <option value="Papua New Guinea">Papua New Guinea</option>
   <option value="Paraguay">Paraguay</option>
   <option value="Peru">Peru</option>
   <option value="Philippines">Philippines</option>
   <option value="Poland">Poland</option>
   <option value="Portugal">Portugal</option>
   <option value="Puerto Rico">Puerto Rico</option>
   <option value="Qatar">Qatar</option>
   <option value="Reunion">Reunion</option>
   <option value="Romania">Romania</option>
   <option value="Russia">Russia</option>
   <option value="Rwanda">Rwanda</option>
   <option value="Saint Helena">Saint Helena</option>
   <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
   <option value="Saint Lucia">Saint Lucia</option>
   <option value="Saint Pierre And Miquelon">Saint Pierre And Miquelon</option>
   <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
   <option value="Samoa">Samoa</option>
   <option value="San Marino">San Marino</option>
   <option value="Sao Tome And Principe">Sao Tome And Principe</option>
   <option value="Saudi Arabia">Saudi Arabia</option>
   <option value="Senegal">Senegal</option>
   <option value="Serbia">Serbia</option>
   <option value="Seychelles">Seychelles</option>
   <option value="Sierra Leone">Sierra Leone</option>
   <option value="Singapore">Singapore</option>
   <option value="Slovakia">Slovakia</option>
   <option value="Slovenia">Slovenia</option>
   <option value="Solomon Islands">Solomon Islands</option>
   <option value="Somalia">Somalia</option>
   <option value="South Africa">South Africa</option>
   <option value="South Korea">South Korea</option>
   <option value="Spain">Spain</option>
   <option value="Sri Lanka">Sri Lanka</option>
   <option value="Sudan">Sudan</option>
   <option value="Suriname">Suriname</option>
   <option value="Swaziland">Swaziland</option>
   <option value="Sweden">Sweden</option>
   <option value="Switzerland">Switzerland</option>
   <option value="Syria">Syria</option>
   <option value="Taiwan">Taiwan</option>
   <option value="Tajikistan">Tajikistan</option>
   <option value="Tanzania">Tanzania</option>
   <option value="Thailand">Thailand</option>
   <option value="The Democratic Republic Of Congo">The Democratic Republic Of Congo</option>
   <option value="Timor-Leste">Timor-Leste</option>
   <option value="Togo">Togo</option>
   <option value="Tokelau">Tokelau</option>
   <option value="Tonga">Tonga</option>
   <option value="Trinidad and Tobago">Trinidad and Tobago</option>
   <option value="Tunisia">Tunisia</option>
   <option value="Turkey">Turkey</option>
   <option value="Turkmenistan">Turkmenistan</option>
   <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
   <option value="Tuvalu">Tuvalu</option>
   <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
   <option value="Uganda">Uganda</option>
   <option value="Ukraine">Ukraine</option>
   <option value="United Arab Emirates">United Arab Emirates</option>
   <option value="United Kingdom">United Kingdom</option>
   <option value="United States">United States</option>
   <option value="Uruguay">Uruguay</option>
   <option value="Uzbekistan">Uzbekistan</option>
   <option value="Vanuatu">Vanuatu</option>
   <option value="Vatican">Vatican</option>
   <option value="Venezuela">Venezuela</option>
   <option value="Vietnam">Vietnam</option>
   <option value="Wallis And Futuna">Wallis And Futuna</option>
   <option value="Yemen">Yemen</option>
   <option value="Zambia">Zambia</option>
   <option value="Zimbabwe">Zimbabwe</option>
   <option value="Åland Islands">Åland Islands</option>
</select>



UI Elements 
----------- 
Radiobutton
Checkboxes

type = 'radio' - 10 Radio button - You can select only 1
type = 'checkbox' - 10 Check box - You can select all 10 as well


IFrames
-------
Download the plugin - https://www.npmjs.com/package/cypress-iframe

npm install -D cypress-iframe

In your cypress/support/commands.js file, add the following:

import 'cypress-iframe';
// or
require('cypress-iframe');


Activities - 
--------------

1. Register the user on - https://tutorialsninja.com/demo/  (abc/xyz)
                        - https://demo.opencart.com/
                        - https://naveenautomationlabs.com/opencart/

2. Login with Same user - (abc/xyz)

3. Do the Guest Checkout 

4. Do the Login Checkout


=============================================================

API Testing  - Application Programming Interface
------------------------------------------------

Hotel(Guest) ---> Waiter ---> Cook

Frontend ---> API ---> Backend

End point - https://flightservice-web.easemytrip.com/EmtAppService//Addons/CurrencyConverter?Country=INR

Request Method: GET

Status Code: 200 OK

Response Payload (JSON) - 

{
    "lstCurrency": [
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "Indian Rupee",
            "CurrencyCodeTo": "INR",
            "CurrencyNameTo": "Indian Rupee",
            "Amount": 1.0,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        },
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "INDIAN RUPEES",
            "CurrencyCodeTo": "AED",
            "CurrencyNameTo": "EMIRATI DIRHAM",
            "Amount": 0.043202610495,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        },
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "INDIAN RUPEES",
            "CurrencyCodeTo": "USD",
            "CurrencyNameTo": "UNITED STATES DOLLAR",
            "Amount": 0.011762190396,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        },
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "INDIAN RUPEES",
            "CurrencyCodeTo": "SGD",
            "CurrencyNameTo": "SINGAPORE DOLLAR",
            "Amount": 0.0153766800,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        },
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "INDIAN RUPEES",
            "CurrencyCodeTo": "THB",
            "CurrencyNameTo": "THAI BAHT",
            "Amount": 0.390735170199,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        },
        {
            "CurrencyCodeFrom": "INR",
            "CurrencyNameFrom": "INDIAN RUPEES",
            "CurrencyCodeTo": "GBP",
            "CurrencyNameTo": "BRITISH POUND",
            "Amount": 0.009013949703,
            "FlagURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/flag_INR.png",
            "CurrencyURL": "https://flight.easemytrip.com/Content/img/curr-icon/app/INR_grey.png"
        }
    ]
}


End Point
Payload
Request Header
Request Type (Method Type)
Response Status Code
Response Payload

Common HTTP Method
GET
POST
PUT
PATCH
DELETE

Negative Scenarios of APIs
- Change the method type
- Change the end point
- Change the payload content
- Change the Header value
- Change the Auth Value


HTTP Status Code for Negative Testing
-------------------------------------
CLIENT SIDE ERRORs
404 - Not Found
400 - Bad Request
401 - Unauthorized
403 - Forbidden
405 - Method Not Allowed

SERVER SIDE ERRORs
500 - Internal Server Error
503 - Service not available

Difference between REST and SOAP
--------------------------------

Framework
---------
Reusable
Reliable
Multithreaded
Easy to Update
Easy to Share

Organized - 
Project - Configurations, logs, pageObjects, testCases, testData, screenshot, videos, utilities, reports

CUCUMBER BDD + PAGE OBJECT MODEL
--------------------------------
featureFile - It is a file which contains all the test cases in the form Gherkin Synax Language

.feature file 
-------------

Feature: Verify the login functionality of the Application


Background: Pre-requisite steps
    Given user launch chrome browser
    When user navigate to home page of application
    Then user navigate to login screen
    
@smoke
Scenario: Validate the login with valid username and password
    And user enter the username and password
    Then user click on login button
    And user navigate to logged in screen

@regression
Scenario outline: Validate the login with set of username and password

    And user enter the <username> and <password>
    Then user click on login button
    And user navigate to logged in screen

Examples:
        | username | password |
        | abc      | xyz      |
        | pqr      | mno      |
        | asn      | 343      |
        | aba      | xyz      |

@sanity 
Scenario: validate home page

    Then validate the home page

stepDefination - Whatever step are present inside your feature file those will be implemented in one file and that file is called stepDefination

Cypress + BDD Cucumber
----------------------

Given user launch chrome browser
When user navigate to home page of application
Then user navigate to login screen


@Given ('user launch chrome browser')
{
    cy.visit('naviagetourl')
}
@When ('user navigate to home page of application')
{
    cy.visit('naviagetourl')
}  
@Then ('user navigate to login screen')
{
    cy.visit('').
}

.js file 
stepDefinition file
-------------------




Swagger Tool 
------------
API Documentation 


Confluence Page


JIRA Task


Excel 


Postman Collection (Share)


END POINT - https://getPatientName/lastname=C
Method Type  - GET Call
Response Message - 302 Result - JSON
Response Code - 200 OK

Select first_name from patients
where first_name like "C%"

Automation - API Request


POST
Create a new record
END POINT - 
METHOD TYPE - 
Response Code - 201 Created









API Framework - 
We validate - 
Positive TC
1. Response Code
2. Response Body
3. We Apply mutliple Assertion on the JSON Response which we get

Response body
Download
{
  "id": 12392,
  "petId": 12392,
  "quantity": 1000000000,
  "shipDate": "2024-10-23T09:57:58.800+0000",
  "status": "placed",
  "complete": true
}



4. We Validate Response Header


Negative TCs for APIs
---------------------

1. Check the request body which you are passing 

cy.js
-----
Will not Have the UI 
Trigger CLI or Cypress Runner
Query Param vs Path Param
JSON Payload - Request and Response
             - graphQL
Authorization() and Authentication()

describe('Validate Post Admin Access Token API')
{
    it('Validate with correct payload' )
    {
        assertion with 200
    }

    it('Validate with same payload)
    {
        assertion with 409
    }

    it('Validate with GET method payload)
    {
        assertion with 405
    }

    it('Missing details')
    {
        assertion with 400
    }
}

==============

Step 1 - 

npm i --save-dev cypress-mochawesome-reporter

