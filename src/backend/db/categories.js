import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "clothing",
    description:
      "Variety of clothing types to shop from",
  },
  {
    _id: uuid(),
    categoryName: "footwear",
    description:
      "Footwear exclusive for men",
  },
  {
    _id: uuid(),
    categoryName: "grooming",
    description:
      "Grooming and wellness products exclusive for men.",
  },
  {
    _id: uuid(),
    categoryName: "gadgets",
    description:
      "Gadgets for entertainment.",
  },
];
