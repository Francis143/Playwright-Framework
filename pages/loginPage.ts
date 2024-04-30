import { Page } from "@playwright/test"

export default class LoginPage{

     constructor(public page:Page){
    this.page=page; 
   }

public Element={
    username:"#username",
    password:"#password",
    loginBtn:"#login",
    location:"#location",
    hotels:"#hotels",
    RoomType: "#room_type",
    NumberofRooms: "#room_nos",
    CheckInDate: "#datepick_in",
    CheckOutDate: "#datepick_out",
    AdultsperRoom: "#adult_room",
    childrenperRoom: "#child_room",
    submit: "#Submit",
    selectRadioBtn:"#radiobutton_0",
    continueBtn: "#continue",
    firstName:"#first_name" ,       
    lastName: "#last_name",
    address: "#address",
    cardNumber: "#cc_num",      
    creditcardType: "#cc_type",
    month: "#cc_exp_month",
    year: "#cc_exp_year",
    cvv: "#cc_cvv",
    bookNow: "#book_now",
    orderNo: "#order_no",
}


async passwordlocator(){
    return  this.page.locator("#username")
}
   async enterUsername(name:string){
        await this.page.locator(this.Element.username).fill(name)

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