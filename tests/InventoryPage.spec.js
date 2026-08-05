import {test,expect} from "@playwright/test"
import { InventoryPage } from "../pages/InventoryPage"
import { LoginPage } from "../pages/LoginPage"
import { logindata } from "../LoginData/logindata"

test("Inventory_page_validation",async({page})=>{

    const loginpage = new LoginPage(page)
    const inventorypage = new InventoryPage(page)
    const validlogin = logindata[0]
    
    await loginpage.navigate()
    await loginpage.loginfunction(validlogin.username,validlogin.password)

    //await inventorypage.navigate()
    await expect(page).toHaveURL(/.*\/inventory\.html/)

    //const title = await inventorypage.getPageTitle()
    await expect(page).toHaveTitle("Swag Labs")

    const prcount = await inventorypage.productsCount()
    await expect(prcount).toBeGreaterThan(0)

    await inventorypage.clickAddToCart()

})