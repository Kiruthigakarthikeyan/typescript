import {test, expect} from '@playwright/test';
enum linksofweb {
    orange = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    sauce = "https://www.saucedemo.com/"
}
test ("enum with web links", async({page})=>{
 const HRMSsite: linksofweb = linksofweb.orange;
 const saucelogin: linksofweb = linksofweb.sauce;
 console.log(`Login to orange HRMS with : ${HRMSsite}`);
 await page.goto(HRMSsite)
  console.log(`Login to saucedemo site with : ${saucelogin}`);
 await page.goto(saucelogin)

})