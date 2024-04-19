
import { Given, When } from "@cucumber/cucumber"
import {chromium,Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../Hooks/pageFixture";
// const { setDefaultTimeout } = require('@cucumber/cucumber');
// setDefaultTimeout(30000); 



When('User enters valid username1 and password1', async function () {
  await  pageFixture.page.fill("#username","Admin")
  await  pageFixture.page.fill("#password","admin123")
  });
  
  
  When('User clicks Login Button1', async function () {
    await  pageFixture.page.fill("#password","admin123")
    
  });