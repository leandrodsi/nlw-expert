const MENU = [
  {
    title: "Meal of the Day",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 24.9,
        description:
          "A hamburger so beautiful that it made me hungry while I was designing this layout for the project...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
    ],
  },
  {
    title: "Promotions",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 34.9,
        description:
          "The ingredients of this burger change every week, so you'll always have a surprise...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 32.7,
        description:
          "That burger we can't take off the menu because of the older customers of the burger joint...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 29.9,
        description:
          "The one you don't like at first, but then you get addicted and can't let go...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
    ],
  },
  {
    title: "Dessert",
    data: [
      {
        id: "5",
        title: "Ice Cream with Brownie",
        price: 18.9,
        description:
          "A delicious dessert to enjoy. Choose the ice cream and sauce you want...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Scoop of ice cream of your choice;",
          "Choose your sauce;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 22.9,
        description:
          "A delicious cupcake to sweeten up. Choose the flavor you like...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Choose the flavor;", "Whipped cream;"],
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: "7",
        title: "Hmmm, Coke!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description: "A super cold coke to accompany your super meal...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { CATEGORIES, MENU, PRODUCTS, ProductProps };
