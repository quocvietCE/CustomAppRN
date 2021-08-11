import React from 'react';
// import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import HeartButton from '../buttons/HeartButton';
import Stars from '../Stars';
import ImageLoad from '../image/ImageLoad';
import {Colors} from '../../themes';
import {useTranslation} from 'react-i18next';
Icon.loadFont();

const Listings = ({
  listings,
  showAddToFav,
  handleAddToFav,
  favouriteListings,
  title,
  boldTitle,
}) => {
  const {t} = useTranslation();
  const renderListings = () => {
    return listings.map((listing, index) => (
      <TouchableHighlight style={styles.card} key={`listing-${index}`}>
        <View>
          {showAddToFav ? (
            <View style={styles.addToFavoriteBtn}>
              <HeartButton
                color={Colors.white}
                selectedColor={Colors.pink}
                selected={favouriteListings.indexOf(listing.id) > -1}
                onPress={() => handleAddToFav(listing)}
              />
            </View>
          ) : null}
          <ImageLoad
            style={styles.image}
            resizeMode="contain"
            source={{uri: listing.photo}}
            borderRadius={8}
            customImagePlaceholderDefaultStyle={styles.image}
          />
          <Text style={[{color: listing.color}, styles.listingType]}>
            {listing.type}
          </Text>
          <Text style={styles.listingTitle} numberOfLines={2}>
            {listing.title}
          </Text>
          <Text style={styles.listingPrice}>
            ${listing.price} {listing.priceType}
          </Text>
          {listing.stars > 0 ? (
            <Stars votes={listing.stars} size={10} color={Colors.green02} />
          ) : null}
        </View>
      </TouchableHighlight>
    ));
  };

  const titleStyle = boldTitle
    ? {fontSize: 22, fontWeight: '600'}
    : {fontSize: 18};
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={[titleStyle, styles.title]}>{title}</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAllBtnText}>{t('exploreScreen.seeAll')}</Text>
          <Icon name="angle-right" size={18} color={Colors.gray04} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.pr30}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {renderListings()}
      </ScrollView>
    </View>
  );
};

export default Listings;

// Listings.propTypes = {
//   title: PropTypes.string.isRequired,
//   boldTitle: PropTypes.bool,
//   listings: PropTypes.array.isRequired,
//   showAddToFav: PropTypes.bool,
//   handleAddToFav: PropTypes.func,
//   favouriteListings: PropTypes.array,
// };

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,
  },
  title: {
    color: Colors.gray04,
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllBtnText: {
    color: Colors.gray04,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: 'column',
    minHeight: 100,
  },
  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.gray04,
    marginTop: 2,
  },
  listingType: {
    fontWeight: '700',
    fontSize: 10,
  },
  addToFavoriteBtn: {
    position: 'absolute',
    right: 12,
    top: 7,
    zIndex: 2,
  },
  listingPrice: {
    color: Colors.gray04,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '300',
  },
  pr30: {
    paddingRight: 30,
  },
});
