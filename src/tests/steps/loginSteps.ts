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


 When('User enters values in {string},{string},{string},{string}', async function (location, hotel, roomtype, numberofRoom) {
   await pageFixture.page.locator(lp.Element.location).selectOption(location)
   await pageFixture.page.locator(lp.Element.hotels).selectOption(hotel)
   await pageFixture.page.locator(lp.Element.RoomType).selectOption(roomtype)
   await pageFixture.page.locator(lp.Element.NumberofRooms).selectOption(numberofRoom)
   await pageFixture.page.waitForTimeout(8000)
 });



 When('User enters {string} and {string}', async function (checkindate, checkoutdate) {
   await pageFixture.page.locator(lp.Element.CheckInDate).fill(checkindate)
   await pageFixture.page.locator(lp.Element.CheckOutDate).fill(checkoutdate)
 });



 When('User enters below details {string} and {string}', async function (adulsperRoom, childrensperRoom) {
   await pageFixture.page.locator(lp.Element.AdultsperRoom).selectOption(adulsperRoom)
   await pageFixture.page.locator(lp.Element.childrenperRoom).selectOption(childrensperRoom)
 });



 When('User clicks search button', async function () {
   await pageFixture.page.locator(lp.Element.submit).click()
 });
 
 When('User clicks radio button', async function () {
   await pageFixture.page.locator(lp.Element.selectRadioBtn).click()
 });
 
 When('User clicks continue button', async function () {
   await pageFixture.page.locator(lp.Element.continueBtn).click()
 });


   When('User enters {string} and {string} and {string}', async function (firstname, lastname, billingaddress) {
      await pageFixture.page.locator(lp.Element.firstName).fill(firstname)
      await pageFixture.page.locator(lp.Element.lastName).fill(lastname)
      await pageFixture.page.locator(lp.Element.address).fill(billingaddress)
   });



   When('User enters {string}', async function (creditcardNumber) {
      await pageFixture.page.locator(lp.Element.cardNumber).fill(creditcardNumber)
   });


   When('User selects {string}', async function (creditcardType) {
      await pageFixture.page.locator(lp.Element.creditcardType).selectOption(creditcardType)
   });



   When('User selects expiry {string} and expiry {string}', async function (month, year) {
      await pageFixture.page.locator(lp.Element.month).selectOption(month)
      await pageFixture.page.locator(lp.Element.year).selectOption(year)
   });



   When('User enters {string} in the text box', async function (cvvNumber) {
      await pageFixture.page.locator(lp.Element.cvv).fill(cvvNumber)
   });



   When('User clicks book now button', async function () {
      await pageFixture.page.locator(lp.Element.bookNow).click()
   });



   When('User gets the order id', async function () {
      await pageFixture.page.waitForTimeout(18000)
      const orderid=await pageFixture.page.locator(lp.Element.orderNo).textContent()
      console.log(orderid)
   });