const { test, expect } = require('@playwright/test');
 
test('Verify Login Page', async ({ page }) => {
  await page.goto('http://localhost:3000');
 
  await expect(page).toHaveTitle('Login Page');
 
  await expect(page.locator('h1')).toHaveText('Login Page');
 
  await expect(page.locator('#username')).toBeVisible();
 
  await expect(page.locator('#password')).toBeVisible();
 
  await expect(page.locator('#login')).toBeVisible();
});
 
