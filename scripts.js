// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// ForEach Basics:
// Log each name and each province to the console.
names.forEach((name, index) => {
  console.log(name); // Log each name
  console.log(provinces[index]); // Log each corresponding province
});

// Log each name with a matching province in the format "Name (Province)".
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation:
// Use map to create a new array of province names in all uppercase.
const uppercasedProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercasedProvinces); // Log the new array of uppercase province names

// Name Lengths:
// Create a new array using map that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths); // Log the array of name lengths

// Sorting:
// Use sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort(); // Spread operator to avoid mutating the original array
console.log(sortedProvinces); // Log the sorted array of provinces

// Filtering Cape:
// Use filter to remove provinces containing "Cape".
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length); // Log the count of remaining provinces

// Finding 'S':
// Create a boolean array using map to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.includes('S'));
console.log(containsS); // Log the boolean array

// Creating Object Mapping:
// Use reduce to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap); // Log the object mapping names to provinces

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];