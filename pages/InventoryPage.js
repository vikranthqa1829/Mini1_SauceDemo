import {BasePage} from "./BasePage"

export class InventoryPage extends BasePage{
constructor(page){
    super(page)
    this.productList = this.page.locator(".inventory_item")
    this.cartBadge = this.page.locator(".shopping_cart_link")
    this.addToCartButton = this.page.getByRole("button",{name:"Add to cart"})
}

async navigate(){
    await super.goto()
}

async getPageTitle(){
    return await super.pageTitle()
}

async productsCount(){
    return await this.productList.count()
}

async clickCartBadge(){
    await this.cartBadge.click()
}

async clickAddToCart(){
    await this.addToCartButton.nth(0).click()
}


}
