import {test, expect} from "@playwright/test"

test('Working with multiple tabs',async({browser})=>{

     const context=await browser.newContext();
         const page=await context.newPage()
     
     
     await page.goto('https://sdetqa.vercel.app/autoplay');


     const [ele]= await Promise.all(
        [
          context.waitForEvent('page'),
           page.getByRole('button',{name:'New Tab'}).click()
        ]
     )
     

     await ele.locator('.getStarted_Sjon').click();

     await context.close();
     await page.close();
    

    
})