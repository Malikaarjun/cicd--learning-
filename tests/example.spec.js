const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
 
test('Verify Login Page', async ({ page }) => {
 
    const loginPage = new LoginPage(page);
 
    await loginPage.open();
    await loginPage.enterUsername('testuser');
    await loginPage.enterPassword('password123');
    await loginPage.clickLogin();
    await loginPage.verifyTitle();
 
    //await expect(page).toHaveTitle('Login Page');
});
 
