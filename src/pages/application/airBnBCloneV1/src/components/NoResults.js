import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Colors} from '../themes';
import {useTranslation} from 'react-i18next';

const NoResults = () => {
  const {t} = useTranslation();
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>{t('savedScreen.saved')}</Text>
        <Text style={styles.description}>{t('savedScreen.notEveryDay')}</Text>
        <Text style={styles.description}>{t('savedScreen.tapTheHeart')}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableHighlight style={styles.findHomesButton}>
          <Text style={styles.findHomesButtonText}>
            {t('savedScreen.findHomes')}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default NoResults;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: Colors.gray04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.gray04,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.gray05,
    paddingLeft: 20,
    paddingRight: 20,
  },
  findHomesButton: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: Colors.pink,
  },
  findHomesButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
