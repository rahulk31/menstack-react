import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Funky Printed Shirt",
    image: "images/products/f5.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "899",
    rating: 4,
    categoryName: "clothing",
    status: 'trending',
  },
  {
    _id: uuid(),
    title: "Full Sleeve Shirt",
    image: "images/products/f6.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "1699",
    rating: 1,
    categoryName: "clothing",
    status: 'hot',
  },
  {
    _id: uuid(),
    title: "Half Sleeve Shirt",
    image: "images/products/f2.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "499",
    rating: 2,
    categoryName: "clothing",
    status: 'new',
  },
  {
    _id: uuid(),
    title: "Abstract Shirt",
    image: "images/products/f1.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "499",
    rating: 3.6,
    categoryName: "clothing",
    status: 'few left',
  },
  {
    _id: uuid(),
    title: "Floral Print Shirt",
    image: "images/products/f3.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "699",
    rating: 3,
    categoryName: "clothing",
    status: 'new',
  },
  {
    _id: uuid(),
    title: "White Funky Shirt",
    image: "images/products/f4.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "699",
    rating: 4,
    categoryName: "clothing",
    status: 'trending',
  },
  {
    _id: uuid(),
    title: "Plain Shirt",
    image: "images/products/n8.jpg",
    seller: "Men's Wardrobe, Delhi",
    price: "699",
    rating: 2,
    categoryName: "clothing",
    status: 'few left',
  },
  {
    _id: uuid(),
    title: "Facewash",
    image: "images/products/facewash.png",
    seller: "Man Matters, Gurgaon",
    price: "199",
    rating: 4.2,
    categoryName: "grooming",
    status: 'trending',
  },
  {
    _id: uuid(),
    title: "Facewash Combo",
    image: "images/products/facewash-combo.png",
    seller: "Man Matters, Gurgaon",
    price: "799",
    rating: 3.5,
    categoryName: "grooming",
    status: 'few in Stock',
  },
  {
    _id: uuid(),
    title: "Shampoo",
    image: "images/products/shampoo.png",
    seller: "Man Matters, Gurgaon",
    price: "169",
    rating: 4,
    categoryName: "grooming",
    status: 'trending',
  },
  {
    _id: uuid(),
    title: "Hair Oil",
    image: "images/products/hair-oil.png",
    seller: "Man Matters, Gurgaon",
    price: "350",
    rating: 3,
    categoryName: "grooming",
    status: 'few left',
  },
  
];
