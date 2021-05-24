// https://unsplash.com/collections/3679291/montain

import faker from 'faker';

const mountains = [
  'Everest',
  'Fuji',
  'Kilimanjaro',
  'K2',
  'Denali',

  'Mont Blanc',
  'Kirkjufell',
  'Fitz Roy',
  'Annapurna',
  'Olympus',

  'Hua',
  'Aoraki',
  'Elbrus',
  'Matterhorn',
  'El Capitan',

  'Grand Teton',
  'Licancabur',
  'Ben Nevis',
  'Rainier',
  'Table Mountain',
];

const images = [
  'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
  'https://images.unsplash.com/photo-1539013646821-b8c1e125b390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1491331606314-1d15535360fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1539655442433-f7d7d867884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',

  'https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1544604860-206456f08229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1459735676691-2c21eea54445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',

  'https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1539067143050-ef15d2e49536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1543510755-795d493b4a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1459735858257-7d224723f6ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/photo-1540170732586-78bb280d254e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',

  'https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
  'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
];
const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const data = [...Array(images.length).keys()].map((i) => {
  return {
    key: String(i),
    // image: `https://source.unsplash.com/collection/3679291/320x${640 + i}`,
    image: images[i],
    name: mountains[i],
  };
});

export const dataNew = [
  {
    key: '1',
    image:
      'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
    name: 'Everest',
  },
  {
    key: '2',
    image:
      'https://images.unsplash.com/photo-1539013646821-b8c1e125b390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Fuji',
  },
  {
    key: '3',
    image:
      'https://images.unsplash.com/photo-1491331606314-1d15535360fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Kilimanjaro',
  },
  {
    key: '4',
    image:
      'https://images.unsplash.com/photo-1539655442433-f7d7d867884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'K2',
  },
  {
    key: '5',
    image:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Denali',
  },
  {
    key: '6',
    image:
      'https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Mont Blanc',
  },
  {
    key: '7',
    image:
      'https://images.unsplash.com/photo-1544604860-206456f08229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Kirkjufell',
  },
  {
    key: '8',
    image:
      'https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Fitz Roy',
  },
  {
    key: '9',
    image:
      'https://images.unsplash.com/photo-1459735676691-2c21eea54445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Annapurna',
  },
  {
    key: '10',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Olympus',
  },
  {
    key: '11',
    image:
      'https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Hua',
  },
  {
    key: '12',
    image:
      'https://images.unsplash.com/photo-1539067143050-ef15d2e49536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Aoraki',
  },
  {
    key: '13',
    image:
      'https://images.unsplash.com/photo-1543510755-795d493b4a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Elbrus',
  },
  {
    key: '14',
    image:
      'https://images.unsplash.com/photo-1459735858257-7d224723f6ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Matterhorn',
  },
  {
    key: '15',
    image:
      'https://images.unsplash.com/photo-1540170732586-78bb280d254e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'El Capitan',
  },
  {
    key: '16',
    image:
      'https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Grand Teton',
  },
  {
    key: '17',
    image:
      'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Licancabur',
  },
  {
    key: '18',
    image:
      'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
    name: 'Ben Nevis',
  },
  {
    key: '19',
    image:
      'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
    name: 'Rainier',
  },
  {
    key: '20',
    image:
      'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
    name: 'Table Mountain',
  },
];

export const avatars = [
  'https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-200w.jpeg',
  'https://tinyfac.es/data/avatars/344CFC24-61FB-426C-B3D1-CAD5BCBD3209-200w.jpeg',
  'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
  'https://tinyfac.es/data/avatars/2DDDE973-40EC-4004-ABC0-73FD4CD6D042-200w.jpeg',
  'https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg',
  'https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg',
];

export default data;
