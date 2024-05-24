// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  // 1. Log Products: Iterate over the products array, logging each product name.
  products.map((p) => p.product),

  // 2. Filter by Name Length: Filter out products with names longer than 5 characters.
  products.filter((p) => p.product.length <= 5),

  // 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
  products
    .filter((p) => p.price && String(p.price).trim() !== "")
    .map((p) => ({ ...p, price: Number(p.price) }))
    .reduce((total, p) => total + p.price, 0),

  // 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
  products.map((p) => p.product).reduce((str, name) => str + name, ""),
  (() => {
    // 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
    const pricedProducts = products
      .filter((p) => p.price && String(p.price).trim() !== "")
      .map((p) => ({ ...p, price: Number(p.price) }));
    const highest = Math.max(...pricedProducts.map((p) => p.price));
    const lowest = Math.min(...pricedProducts.map((p) => p.price));
    return `Highest: ${highest}. Lowest: ${lowest}.`;
  })(),
  // 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
  products.reduce((acc, { product, price }) => {
    acc.push({ name: product, cost: price });
  }, [])
);
