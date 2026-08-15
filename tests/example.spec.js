const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginData } = require('../test-data/loginData');
 
test('Verify Login Page', async ({ page }) => {
 
    const loginPage = new LoginPage(page);
 
    await loginPage.open();
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();
    await loginPage.verifyTitle();
 
    //await expect(page).toHaveTitle('Login Page');
});
 
