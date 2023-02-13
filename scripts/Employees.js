import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li class="employee_list" id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfilledOrders++
        } 
    }
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            let matchingEmployee = null
            for (const employee of employees) {
                if (parseInt(employeeId) === employee.id) {
                    matchingEmployee = employee
                }
            }

            const orderCount = employeeOrders(matchingEmployee)

            window.alert(`${matchingEmployee.name} has sold ${orderCount} products`)
        }
    }
)