import { test,expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { InventoryPage } from "../pages/InventoryPage"
import { logindata } from "../LoginData/logindata"
import { CartPage } from "../pages/CartPage"

test("CartPageTC",async({page})=>{
    const loginpage = new LoginPage(page)
    const inventorypage = new InventoryPage(page)
    const cartpage = new CartPage(page)
    const validlogin = logindata[0]

    await loginpage.navigate()
    await loginpage.loginfunction(validlogin.username,validlogin.password)
    await inventorypage.clickAddToCart()
    const count = await cartpage.verifyAddedProductcount()
    await expect(count).toBeGreaterThan(0)
})
