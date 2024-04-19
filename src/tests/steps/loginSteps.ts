import { Given, When } from "@cucumber/cucumber";
import {chromium,Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../Hooks/pageFixture";
import LoginPage from "../../../pages/loginPage";
// const { setDefaultTimeout } = require('@cucumber/cucumber');
// setDefaultTimeout(30000); 

let lp:LoginPage;

 
         Given('User launches the adactin', async function () {
         
         await pageFixture.page.goto("https://adactinhotelapp.com/")
        
         });

  

         When('User enters valid username and password', async function () {
            lp=new LoginPage(pageFixture.page);
        //  lp.enterUsername("Francis3535")
          
         await pageFixture.page.locator(lp.Element.username).fill("Francis3535")
      
//     await lp.enterUsername("Admin")
            
         });

         When('User clicks Login Button', async function () {
        //   await  pageFixture.page.fill("#password","admin123")
        //   // await  pageFixture.page.fill(lp.passwordlocator,"admin123")
        //   await  pageFixture.page.waitForTimeout(8000)
        await pageFixture.page.locator(lp.Element.password).fill("Francis@123")
            
       // lp.enterPassword("Francis@123")
        lp.login()
        
          });
 