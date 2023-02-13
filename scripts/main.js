import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="header">
<img class="logo" src="brewed-awakenings-logo.png">
<section class="shop_info"
<h1>Our Shop</hi>
</section>
<article class="details">
    <section class="detail--column list details__employees">
        <h2 class="employee_head"><u>Employees</u></h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2 class="product_head"><u>Products</u></h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2 class="order_head"><u>Orders</u></h2>
    ${Orders()}
</article>
`

mainContainer.innerHTML = applicationHTML

