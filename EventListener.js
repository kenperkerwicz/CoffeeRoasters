import { createOrder } from "./CreateOrder.js"

/*
    Use the `as` keyword to alias a function
    name from another module to use in this module
    when there is a naming conflict
*/
import { createOrder as postOrder } from "./DataManager.js"


const buyButton = document.querySelector("#placeOrder")

let clickOrder = () => {
    buyButton.addEventListener("click", () => {

// collect user input{}
    const name = document.querySelector("#custName").value
    const quantity = document.querySelector("#quantityInput").value
    const productId = document.querySelector("#prodDrop").value
    const sizeId = document.querySelector("#sizeDrop").value

    // Build order object from input
    const newOrderObj = createOrder(name, quantity, productId, sizeId)

    // console.log(newOrderObj);
    // post to API
    postOrder(newOrderObj)

    let newCard = (newOrderObj) => {
       return ` <h1>customer name: ${newOrderObj.customerName}</h1>
       <div> Order: ${newOrderObj.quantity}</div>
       <div> Size: ${newOrderObj.productId}</div>
       <div> Quantity: ${newOrderObj.sizeId}</div>
       `
    }

 console.log(newCard)


    // Append new card to DOM
    let cardElement = document.querySelector("#cardInfo")
    cardElement.innerHTML += newCard(newOrderObj)

})
}
export { clickOrder }