import {BasePage} from "./BasePage"

export class MenuPage extends BasePage{
constructor(page){
    super(page)
    this.checkoutbtn = this.page.getByRole("button",{name:"checkout"})

}
async logout(){
    await this.checkoutbtn.click()
}
}