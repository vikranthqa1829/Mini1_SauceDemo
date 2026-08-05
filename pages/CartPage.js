import {BasePage} from "./BasePage"
import { InventoryPage } from "./InventoryPage"
import { LoginPage } from "./LoginPage"


export class CartPage extends BasePage{
constructor(page){
    super(page)
    this.cartaddedprod= this.page.locator(".shopping_cart_badge")
}

async verifyAddedProductcount(){
    await this.cartaddedprod.waitFor({state:"visible"})
    const prodcount = Number(await this.cartaddedprod.textContent())
    return prodcount
}

}