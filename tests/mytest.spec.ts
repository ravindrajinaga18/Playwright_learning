import{test, expect} from "@playwright/test"

test('Verify the drag and drop functionality',async({page})=>{
  
  await page.goto('https://demo.guru99.com/test/drag_drop.html')

      const rs_5000=page.locator('#fourth a').nth(1);
      //const rs_50002=page.locator('.button.button-orange').nth(3);
      const bank=page.locator('#credit2 a').nth(4)
      const sales=page.locator('.#credit1 a').nth(5)

      const deb_account=page.locator('.placeholder').nth(0);
      const deb_amount=page.locator('.placeholder').nth(1);
      const cre_account=page.locator('.placeholder').nth(2);
      const cre_amount= page.locator('.placeholder').nth(3);

     await bank.dragTo(deb_account);
     await page.waitForTimeout(3000);
    await rs_5000.dragTo(deb_amount);
    await page.waitForTimeout(3000);
    await sales.dragTo(cre_account);
    await page.waitForTimeout(3000);
    await rs_5000.dragTo(cre_account);

})