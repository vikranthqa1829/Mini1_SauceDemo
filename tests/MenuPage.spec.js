import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { logindata } from "../LoginData/logindata"
import { InventoryPage } from "../pages/InventoryPage"
import { CartPage } from "../pages/CartPage"
import { MenuPage } from "../pages/MenuPage"

test("Final Logout",async({page})=>{

    const loginpage = new LoginPage(page)
    const validlogin = logindata[0]
    const inventorypage = new InventoryPage(page)
    const menupage = new MenuPage(page)
    const cartpage = new CartPage(page)

    await loginpage.navigate()
    await loginpage.loginfunction(validlogin.username,validlogin.password)
    await inventorypage.clickAddToCart()
    await inventorypage.clickCartBadge()
    await cartpage.verifyAddedProductcount()
    await menupage.logout()
})