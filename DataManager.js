const getProducts = () => {
  return fetch("http://127.0.0.1:3000/products")
      .then(res => res.json())
}
const getOrders = () => {
  return fetch("http://127.0.0.1:3000/orders")
      .then(res => res.json())
}
const getSizes = () => {
  return fetch("http://127.0.0.1:3000/sizes")
      .then(res => res.json())
}
const createOrder = (orderObject) => {
  return fetch("http://127.0.0.1:3000/orders", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(orderObject)
  })
      .then(res => res.json())
}

const cantSeeMeHaHa = () => {}

export { getOrders, getProducts, getSizes, createOrder }
