//const BasePage = require("./BasePage")     // commoon JS method
import {BasePage} from "./BasePage"          // ES6 method

class LoginPage extends BasePage{
constructor(page){
    super(page)
    this.usernametext = page.getByPlaceholder("Username")
    this.passwordtext = page.getByPlaceholder("Password")
    this.loginbtn = page.getByRole("button",{name:"Login"}) 
    this.errormsg = page.getByText("Epic sadface: Username is required")
    this.pagetitle = page.getByText("Products",{exact:true})
}

async navigate(){
    await super.goto()
}

async enterUsername(username){
    await this.usernametext.fill(username)
}

async enterPassword(password){
    await this.passwordtext.fill(password)
}

async clickLogin(){
    await this.loginbtn.click()
}

async loginfunction(username,password){
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLogin()
}

async errorMessage(){
    return await this.errormsg.textContent()
    //await expect(this.errormsg).toBeVisible()
    //await expect(this.errormsg).toHaveText("Epic sadface: Username is required")
}

async pagetitlevalidations(){
    return await this.pagetitle.textContent()
    //await expect(this.pagetitle).toBeVisible()
    //await expect(this.pagetitle).toHaveText("Products")
}
}

// module.exports = LoginPage   //Common JS Method