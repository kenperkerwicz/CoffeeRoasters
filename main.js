import { getOrders,
  getProducts,
  getSizes,
  createOrder } from "./DataManager.js" 

import { clickOrder
} from "./EventListener.js"

let sizes = []


getSizes().then(
  (arrayOfSizes) => {
      // 100% sure we have sizes
      // console.log(arrayOfSizes)
      sizes = arrayOfSizes
      sizes.forEach(size => {
       let sizeInput = size.size
       document.querySelector("#sizeDrop").innerHTML += 
       `<option value="${sizeInput}">${sizeInput}</option>`
      });

  }
).then(
  () => {
       return getProducts()
  }
)
.then(
  (productArray) => {
    
    let products = productArray
    products.forEach(product => {
      let prodInput = product.name 
      document.querySelector("#prodDrop").innerHTML += 
      `<option value="${prodInput}">${prodInput}</option>`
    })

     
  }
 )

// Introduction to modules and import/export with promises... oh my'

clickOrder()

// products = productArray
//     // products.forEach(product => {
//     //   let prodInput = product.name 
//     //   document.querySelector("#prodDrop").innerHTML += 
//     //   `<option value="${prodInput}">${prodInput}</option>`