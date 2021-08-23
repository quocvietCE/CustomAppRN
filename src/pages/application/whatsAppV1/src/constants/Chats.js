export default {
  id: '1',
  users: [
    {
      id: 'u1',
      name: 'Vadim',
      imageUri:
        'https://kenh14cdn.com/2020/8/26/934302448453706559496612430600757359619184n-15984160661181498058789.jpg',
    },
    {
      id: 'u2',
      name: 'Lukas',
      imageUri:
        'https://kenh14cdn.com/2020/8/26/956974972416934737374602697104702138980624n-15984162669061966768878.jpg',
    },
  ],
  messages: [
    {
      id: 'm1',
      content: 'How are you, Lukas!',
      createdAt: '2020-11-10T12:48:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm2',
      content: 'I am good, good',
      createdAt: '2020-11-03T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Lukas',
      },
    },
    {
      id: 'm3',
      content: 'What about you?',
      createdAt: '2020-11-03T14:49:40.000Z',
      user: {
        id: 'u2',
        name: 'Lukas',
      },
    },
    {
      id: 'm4',
      content: 'Good as well, preparing for the stream now.',
      createdAt: '2020-10-03T14:50:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm5',
      content: 'How is your uni going?',
      createdAt: '2020-11-03T14:51:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm6',
      content:
        'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
      createdAt: '2020-11-03T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Lukas',
      },
    },
    {
      id: 'm7',
      content:
        'Big Data is really interesting. Cannot wait to go through all the material.',
      createdAt: '2020-11-03T14:53:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
  ],
};
