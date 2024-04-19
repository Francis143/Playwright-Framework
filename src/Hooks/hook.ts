import { BeforeAll,AfterAll,Before,After, Status, AfterStep } from "@cucumber/cucumber";
import { chromium,Browser,Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import path from "path";



let browser:Browser;
let context:BrowserContext;
BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slowMo:1000})
})
Before(async function(){
  context=await browser.newContext()
   const page=await context.newPage()
    pageFixture.page=page;
})

AfterStep(async function({pickle,result}){
    const img=await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type:"png"})
    await this.attach(img,"image/png"); 
    
})
After(async function({pickle,result}){
    // console.log(result?.status);
    // if(result?.status==Status.PASSED){
    //     //screenshot
    // const img=await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type:"png"})
    // await this.attach(img,"image/png");
    // }
    
    await pageFixture.page.close()
  await context.close()
})
AfterAll(async function(){
    await browser.close()
})