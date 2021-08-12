const types = [
  {
    type: 'Dinner',
    image: require('../assets/images/dinner.png'),
  },
  {
    type: 'Lunch',
    image: require('../assets/images/lunch.png'),
  },
  {
    type: 'Breakfast',
    image: require('../assets/images/breakfast.png'),
  },
  {
    type: 'Dessert',
    image: require('../assets/images/dessert.png'),
  },
];

const listRestaurants = [
  {
    background: require('../assets/images/bread.png'),
    miles: 10,
    name: "Noah's Bagel",
    type: 'Lunch',
    country: 'American',
    currency: '$',
    smile: 97,
  },
  {
    background: require('../assets/images/pho.png'),
    miles: 10,
    name: 'Pho Saigon',
    type: 'Lunch',
    country: 'VietNam',
    currency: 'VND',
    smile: 97,
  },
];

const listFood = [
  {
    name: 'Checken, Cashew, and Avacado Salad',
    restaurant: 'The Plant Cafe',
    price: 15,
    image: require('../assets/images/salad.png'),
    quantity: 1,
    id: 1,
  },
  {
    name: 'Vegan Mac & Cheese',
    restaurant: 'The Plant Cafe',
    price: 15,
    image: require('../assets/images/cheese.png'),
    quantity: 2,
    id: 2,
  },
  {
    name: 'Delivery Fee',
    restaurant: '',
    price: 15,
    image: require('../assets/images/cheese.png'),
    quantity: 2,
    isDelivery: true,
    fee: 2.5,
    id: 3,
  },
];

export { types, listRestaurants, listFood };
