import {test,expect} from "@playwright/test"

//const LoginPage=require("../pages/LoginPage")   //Common JS method
//const LoginData =require("../LoginData/logindata")

import {LoginPage} from "../pages/LoginPage"      // ES6 method
import {logindata} from "../LoginData/logindata"

for(const data of logindata){
test(`Login Page validations: ${data.username}`,async({page})=>{

    const Loginpage=new LoginPage(page)
    await Loginpage.navigate()
    await Loginpage.loginfunction(data.username,data.password)

    if(data.shouldSucceed){
        await expect(page).toHaveURL(/inventory/)
        await expect(Loginpage.pagetitle).toHaveText("Products")
    }//else{
     //    await expect(Loginpage.errormsg).toBeVisible()
    //}
})
}


