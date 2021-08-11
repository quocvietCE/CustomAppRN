import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../themes';
import * as RootNavigation from '../helpers/RootNavigation';
import I18N from '../config/i18n';

Icon.loadFont();

const SearchBar = ({openDrawer}) => {
  return (
    <View style={styles.wrapperSearch}>
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate('MyModal', {
                errorMessage: I18N.t('apiError.NetworkError'),
              });
            }}>
            <Icon
              name="ios-search"
              size={20}
              color={Colors.gray02}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <Text style={styles.textInput}>Try "Cape Town"</Text>
        </View>

        <TouchableOpacity onPress={openDrawer} style={styles.buttonMenu}>
          <Icon
            name="menu-outline"
            size={36}
            color={Colors.gray04}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonMenu: {
    marginTop: 40,
  },
  wrapperSearch: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 120,
    zIndex: 99,
  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: Colors.gray03,
    backgroundColor: Colors.white,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 3,
    height: 40,
    marginTop: 50,
    marginLeft: 20,
    width: '80%',
  },
  searchIcon: {
    position: 'absolute',
    left: 18,
    top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 11,
    marginLeft: 44,
    color: Colors.gray02,
  },
});
