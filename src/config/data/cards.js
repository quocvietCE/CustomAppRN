// https://www.flaticon.com/packs/payments-logos

import faker from 'faker';
import niceColors from 'nice-color-palettes';
faker.seed(1);

const images = [
  'https://images.unsplash.com/photo-1573147367786-a5a227916f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1593318886319-b31eb802ecf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1511005557652-a9ea84d222f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1596357774502-c1d3a5b35521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1529503257657-e0ce256b46d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
];

const ccType = [
  'https://user-images.githubusercontent.com/2805320/94189285-d33b5d80-feaa-11ea-85a1-731eafeca988.png',
  'https://user-images.githubusercontent.com/2805320/94189288-d46c8a80-feaa-11ea-82f2-b02b3b410d7c.png',
];
export default [...Array(images.length).keys()].map((i) => ({
  key: faker.random.uuid(),
  imageUri: images[i],
  cc: faker.finance.creditCardNumber('[4-6]#{3} #{4} #{4} #{3}L'),
  holder: faker.name.findName(),
  type: faker.helpers.shuffle(ccType)[0],
}));

const colors = [...niceColors[1], ...niceColors[55], ...niceColors[5]];
const icons = ['shopping-bag', 'coffee', 'corner-right-up', 'dollar-sign'];
export const innerData = [...Array(20).keys()].map(() => {
  return {
    key: faker.random.uuid(),
    ammount: faker.finance.amount(-400, 400, 2),
    department: faker.commerce.department(),
    name: faker.commerce.product(),
    color: colors[faker.random.number(colors.length - 1)],
    icon: icons[faker.random.number(icons.length - 1)],
  };
});
