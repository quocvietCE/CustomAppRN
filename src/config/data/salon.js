// https://www.flaticon.com/packs/kawaii-avatars-3

import faker from 'faker';
import niceColors from 'nice-color-palettes';
faker.seed(1);

const colors = [
  ...niceColors[1].slice(1, niceColors[1].length),
  ...niceColors[55].slice(0, 3),
];
export const iconColors = ['#9FD7F1', '#F3B000', '#F2988F'];

const data = [
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435041.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435061.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435065.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435050.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435037.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435043.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435055.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435049.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435047.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435039.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435036.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435064.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435034.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435042.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435032.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435031.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435051.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435053.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435021.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435035.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435028.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435060.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435025.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435033.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435069.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435059.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435030.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435046.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435048.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435023.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435026.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435029.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435040.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435054.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435057.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435020.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435044.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435045.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435062.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435066.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435068.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435022.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435056.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435063.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435038.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435058.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435067.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435024.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435027.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435052.png',
  },
];

export default data.map((item, index) => ({
  ...item,
  key: faker.random.uuid(),
  color: colors[index % colors.length],
  name: faker.name.findName(),
  jobTitle: faker.name.jobTitle(),
  categories: [...Array(3).keys()].map(() => {
    return {
      key: faker.random.uuid(),
      title: faker.name.jobType(),
      subcats: [...Array(3).keys()].map(faker.name.jobType),
    };
  }),
}));
