/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice=(products)=>{
let sum=0
products.map(product=>{sum+=product.price})
return sum
}

/**
 * 
 * @returns {string} to created order
 */
export const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
 }