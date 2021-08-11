const listingData = (data) => {
  console.log('listingData data: ', data);
  return (
    data || [
      {
        boldTitle: false,
        listings: [
          {
            id: 1,
            color: '#484848',
            location: 'mock data',
            photo: '',
            price: 10,
            priceType: '',
            stars: 10,
            title: '',
            type: '',
          },
        ],
        showAddToFav: false,
        title: '',
      },
    ]
  );
};

export {listingData};
