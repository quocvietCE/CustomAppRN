import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/explore/Categories';
import {categoriesList} from '../../config/constants/HardData';
import Listings from '../../components/explore/Listings';
import styles from './styles';
import {propTypesArray} from '../../config/constants/DefaultPropTypes';
import {getListing} from '../../services/Listing';
import {listingData as listingDataModel} from '../../helpers/axios/response/mapping';
import {useTranslation} from 'react-i18next';

const ExploreScreen = ({navigation, route}) => {
  const {t} = useTranslation();
  const [favouriteListings, setFavouriteListings] = useState([]);
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getListing();
      setListingData(listingDataModel(result.data));
    };
    fetchData();
  }, []);

  const handleAddToFav = listing => {
    const {navigate} = navigation;
    const index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      const newFavouriteListings = favouriteListings.filter(
        item => item !== listing.id,
      );
      setFavouriteListings(newFavouriteListings);
    } else {
      navigate('CreateListStack', {
        listing,
        onCreateListClose,
      });
    }
  };

  const onCreateListClose = (listingId, listCreated) => {
    let newFavouriteListings = [];
    if (listCreated) {
      newFavouriteListings.push(listingId);
    } else {
      newFavouriteListings = favouriteListings.filter(
        item => item !== listingId,
      );
    }
    setFavouriteListings(newFavouriteListings);
  };

  function renderListings() {
    console.log('renderListings listingData: ', listingData);
    return listingData.map((listing, index) => {
      return (
        <View key={`listing-${index}`}>
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={handleAddToFav}
            favouriteListings={favouriteListings}
          />
        </View>
      );
    });
  }

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.wrapper]}>
        <SearchBar openDrawer={openDrawer} />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.heading}>{t('exploreScreen.exploreAirbnb')}</Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {renderListings()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

ExploreScreen.propTypes = {
  listingData: propTypesArray,
};

export default ExploreScreen;
