import { Given, When } from "@cucumber/cucumber";
import {chromium,Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../Hooks/pageFixture";
import LoginPage from "../../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30000); 

let lp:LoginPage;
 let assert:Assert;
         Given('User launches the adactin', async function () {
         
         await pageFixture.page.goto("https://adactinhotelapp.com/")
         
     assert=new Assert(pageFixture.page)
     const url1=await pageFixture.page.url()
     console.log("url1  :"+url1)
//  expect(url1).toEqual("https://adactinhotelapp.com/")

//       assert.assertTitle("https://adactinhotelapp.com/")

         });

  

         When('User enters valid username and password', async function () {
            lp=new LoginPage(pageFixture.page);
        //  lp.enterUsername("Francis3535")
          
         await pageFixture.page.locator(lp.Element.username).fill("Francis3535")
         await pageFixture.page.locator(lp.Element.password).fill("Francis@123")
//     await lp.enterUsername("Admin")
            
         });

         When('User clicks Login Button', async function () {
        //   await  pageFixture.page.fill("#password","admin123")
        //   // await  pageFixture.page.fill(lp.passwordlocator,"admin123")
        //   await  pageFixture.page.waitForTimeout(8000)
        
            
       // lp.enterPassword("Francis@123")
        lp.login()
        const url1=await pageFixture.page.url()
        console.log("url1  :"+url1)
       expect(url1).toEqual("https://adactinhotelapp.com/")
          });
 When('User enters values in {string},{string}',async function(location,hotel){

    await pageFixture.page.locator(lp.Element.location).selectOption(location)
    await pageFixture.page.locator(lp.Element.hotels).selectOption(hotel)
    await pageFixture.page.waitForTimeout(8000)
 })