const {test,expect} = require('@playwright/test');

test('Home page', async({page}) => {
    
await page.goto('https://www.facebook.com/');
const pageTitle =page.title();
console.log('page title is:',pageTitle);

await expect(page).toHaveTitle('Facebook');

await page.close();



})

