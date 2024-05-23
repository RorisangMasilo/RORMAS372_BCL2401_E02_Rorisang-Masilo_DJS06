// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// 1. forEach to log each name and each province to the console in the format "Name (Province)".
names.forEach((name,index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. `map` to log a new array of province names in all uppercase
const provinceUpperCase = provinces.map(province => province.toUpperCase());

console.log(provinceUpperCase);

// 3. Log a new array using `map` that contains the length of each name.


// 4. `sort` to alphabetically sort the provinces
 
 
// 5.`filter` to remove provinces containing "Cape" to log the count of remaining provinces.

// 6. Log a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

// 7. `reduce` to transform the names array into an object mapping names to their respective provinces.


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

 console.log{
// 1. Log Products: Iterate over the products array, logging each product name.
const products = {}
// 2. Filter by Name Length: Filter out products with names longer than 5 characters.
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filterProducts);
// 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
const 
// 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
// 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
// 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
 };