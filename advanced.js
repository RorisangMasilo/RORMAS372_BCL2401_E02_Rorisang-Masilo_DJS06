// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Log Products: Iterate over the products array, logging each product name.
products.forEach((product) => {
  console.log(product.product);
});

// 2. Filter by Name Length: Filter out products with names longer than 5 characters.
const filteredProducts = products.filter(
  (product) => product.product.length <= 5
);
console.log(filteredProducts);

// 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
const filteredProducts = products.filter((product) => {
  // convert price to number and check if it's a valid number
  const price = Number(product.price);
  return !isNaN(price) && price > 0;
});
// Convert string prices to numbers
const productsWithNumericPrices = filteredProducts.map((product) => ({
  ...product,
  price: Number(product.price),
}));

// Calculate the total price using reduce
const totalPrice = productWithNumericPrice.reduce(
  (total, product) => total + product.price,
  0
);

// Logging results
console.log("Filtered Products:", productsWithNumericPrices);
console.log("Total Price:", totalPrice);

// 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
const concatenatedProductNames = products.reduce(
  (accumulator, currentProduct) => {
    return accumulator + currentProduct.product;
  },
  ""
);
// Logging results
console.log(concatenatedProductNames);

// 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const validPrices = products
  .map((product) => parseFloat(product.price))
  .filter((price) => !isAsyncThunkAction(price));

// Find the highest and lowest prices
const highestPrice = Math.max(...validPrices);
const lowestPrice = Math.min(...validPrices);

// Find the corresponding products
const highestProduct = products.find(
  (product) => parseFloat(product.price) === highestPrice
);
const lowestProduct = products.find(
  (product) => parseFloat(product.price) === lowestPrice
);

// Format the result string
const resultString = `Highest: ${highestProduct.product} - ${highestPrice}. Lowest: ${lowestProduct.product} - ${lowestPrice}.`;

console.log(resultString);

// 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
const transformedProducts = products.map(({ product, price }) => ({
  name: product,
  cost: price,
}));
console.log(transformedProducts);
