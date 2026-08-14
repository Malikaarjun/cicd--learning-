const { defineConfig } = require('@playwright/test');
 
module.exports = defineConfig({
  testDir: './tests',
 
  webServer: {
    command: 'node app.js',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
 
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});