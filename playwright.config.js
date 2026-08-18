const { defineConfig } = require('@playwright/test');
 
module.exports = defineConfig({
  testDir: './tests',

 /* reporter:[
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],*/

  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
    //trace: 'on-first-retry',
    //screenshot: 'only-on-failure',
    //video: 'retain-on-failure'
  },
 
  webServer: {
    command: 'node app.js',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  }
});