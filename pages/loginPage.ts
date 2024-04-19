import { Page } from "@playwright/test";

export default class LoginPage{

     constructor(public page:Page){
    this.page=page; 
   }
async passwordlocator(){
    return  this.page.locator("#username")
}
   async enterUsername(name:string){
        await this.page.locator("#username").fill(name)

    }
    async enterPassword(password:string){
        await this.page.locator("#password").fill(password)

    }
    async login(){
        await this.page.locator("#login").click()

    }

 userName(){
        return  this.page.locator("#username")
    }
}