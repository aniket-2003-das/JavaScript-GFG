const clothingStock = [
  {
    id: "1",
    color: "red",
    category: "men shirt",
    item: "Regular Fit Men Shirt",
    inStock: true
  },
  {
    id: "2",
    color: "green",
    category: "women shirt",
    item: "Slim Fit Women Shirt",
    inStock: true
  },
  {
    id: "3",
    color: "blue",
    category: "men shirt",
    item: "Oversized Men Shirt",
    inStock: false
  },
  {
    id: "4",
    color: "yellow",
    category: "men tshirt",
    item: "Regular Fit Men Tshirt",
    inStock: false
  },
  {
    id: "5",
    color: "magenta",
    category: "women jeans",
    item: "Ankle Lenght Women Jeans",
    inStock: true
  },
  {
    id: "6",
    color: "yellow",
    category: "men shirt",
    item: "Casual Fit Men Shirt",
    inStock: true
  },
  {
    id: "7",
    color: "green",
    category: "men jeans",
    item: "Carrot Fit Men Jeans",
    inStock: true
  },
  {
    id: "8",
    color: "red",
    category: "women shirt",
    item: "Casual Fit Women Shirt",
    inStock: false
  }
];

// 3a: Console all the different colours available for women's shirts
clothingStock.map(
  ({ color, category }) => category === "women shirt" && console.log(color)
);


// 3b. Console all the different colours available for men shirt which are currently in stock.
clothingStock.map(
  ({ color, inStock, category }) =>
    category === "men shirt" && inStock && console.log(color)
);


// 3c: Console an array which only contains the elements which are in stock.
const productsInStock = clothingStock.filter(({ inStock }) => inStock);
console.log(productsInStock);
