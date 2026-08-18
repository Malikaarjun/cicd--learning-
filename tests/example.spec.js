const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginData } = require('../test-data/loginData');
 
test('Verify Login Page', async ({ page }) => {
 
    const loginPage = new LoginPage(page);
 
    await loginPage.open();
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();
    await loginPage.verifyTitle();
 
    //await expect(page).toHaveTitle('Welcome Page');
});

test('Invalid Username Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.invalidlogin(loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(page.locator('#error')).toHaveText('Invalid username or password');
});

test('Invalid Password Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.invalidlogin(loginData.invalidPasswordUser.username,
        loginData.invalidPasswordUser.password
    );

    await expect(page.locator('#error')).toHaveText('Invalid username or password');
});
 
