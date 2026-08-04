export class BasePage
{
constructor(page){
    this.page = page
    this.baseUrl="https://www.saucedemo.com/"

}
async goto(){
await this.page.goto(this.baseUrl)
//await this.page.goto(`${this.baseUrl}`) both are correct
}

async pageTitle(){
    return await this.page.title()
}    
}
//module.exports=BasePage // Common JS method

