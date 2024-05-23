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
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// 1. forEach to log each name and each province to the console in the format "Name (Province)".
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. `map` to log a new array of province names in all uppercase
const provinceUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provinceUpperCase);

// 3. Log a new array using `map` that contains the length of each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. `sort` to alphabetically sort the provinces

// 5.`filter` to remove provinces containing "Cape" to log the count of remaining provinces.

// 6. Log a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

// 7. `reduce` to transform the names array into an object mapping names to their respective provinces.
