/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Washed Black Denim Overalls",
     priceInCents: 12000,
     availableSizes: [ 28, 30, 32, 36 ]
   }
*/

// `salesTax` is a decimal number, like 0.065
function createSalesProduct(product, salesTax) {
  const {name} = product;
  const {availableSizes} = product;
  return {
    name,
    availableSizes,
    salesTax,
    priceInCents: product.priceInCents * (1 + salesTax),
  };
}

  function joinSizes(productA, productB) {
    const {availableSizes} = productA;
    let result = [...availableSizes, ...productB.availableSizes];
    return result;
  }
  

module.exports = {
  createSalesProduct,
  joinSizes,
};
