
import {test, expect, Page} from "@playwright/test"


async function selectYear(page:Page,tar_data:string,tar_month:string,tar_year:string){

 const month= await page.locator('.ui-datepicker-month').innerText();
 const year= await page.locator('.ui-datepicker-year').innerText();
    while(true){
      if(month===tar_month && year===tar_year){
            break
      }

      if()
    }
}









   






test('Verifying the datepickers',async({page})=>{
     const date_filed=page.locator('#datepicker1');
     await date_filed.click();

     const tar_data='2';
     const tar_month='June'
     const tar_year='2027';

     selectYear(page,tar_data,tar_month,tar_year);
})