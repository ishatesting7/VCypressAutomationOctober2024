import login from "../../pageObject/loginPage";
import forgetPasswordPage from "../../pageObject/forgetPasswordPage";
import genericUtils from "../../pageObject/genericUtils";
describe('Login Page Validation', ()=>{
    let username, password
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            username = data.username;
            password = data.password;
        })
    })
    it('Login Successful', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.typeUserName(username);
        login.typePassword(password);
        login.clickLoginBtn();
        genericUtils.waitForSometime({timeout:5000})
        genericUtils.validateElementVisible({locator:'.oxd-userdropdown-tab'});
        
    })

    it('Login UnSuccessful', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.typeUserName('ad');
        login.typePassword(password);
        login.clickLoginBtn();
        genericUtils.waitForSometime({timeout:5000})

    })
    it('ForgetPassword - Click on Reset Button', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.clickForgetPassword();
        login.validateURL({url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'})
        forgetPasswordPage.enterUsernameValue();
        forgetPasswordPage.clickResetPasswordBtn();
        genericUtils.waitForSometime({timeout:5000})

    })

    it('ForgetPassword - Click on Cancel Button', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.clickForgetPassword();
        login.validateURL({url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'})
        forgetPasswordPage.enterUsernameValue();
        forgetPasswordPage.clickCancelBtn();
        genericUtils.waitForSometime({timeout:5000})

    })
})