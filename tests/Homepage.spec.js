const{test, expect}=require('@playwright/test');

test ('home page',async ({page})=>{


    await page.goto('https://www.demoblaze.com/');

    const  pageTitle =page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL12 = page.url();
    console.log('page URL is:',pageURL12);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

})
 

    
