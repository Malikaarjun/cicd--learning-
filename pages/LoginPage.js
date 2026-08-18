const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
    }
 
    async open() {
        await this.page.goto('/');
    }
    async enterUsername(username) {
    await this.usernameInput.fill(username);
}
 
async enterPassword(password) {
    await this.passwordInput.fill(password);
}
 
async clickLogin() {
    await this.loginButton.click();
}
 
    async getTitle() {
        return await this.page.title();
    }
    async verifyTitle(){
        await expect(this.page).toHaveTitle('Login Page');
    }

    async invalidlogin(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
 
module.exports = { LoginPage };