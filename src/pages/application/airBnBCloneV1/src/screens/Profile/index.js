import React from 'react';
import {View, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../../components/buttons/RoundedButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/slice/AuthSlice';

import {Colors} from '../../themes';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

FontAwesomeIcon.loadFont();

const ProfileScreen = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeLanguageEnglish = async () => {
    try {
      await AsyncStorage.setItem('@APP:languageCode', 'en');
    } catch (error) {
      console.log(` Hi Errorrrr : ${error}`);
    }
    i18n.changeLanguage('en').then(() => {
      RNRestart.Restart();
    });
  };

  const handleChangeLanguageArab = async () => {
    try {
      await AsyncStorage.setItem('@APP:languageCode', 'ar');
    } catch (error) {
      console.log(` Hi Errorrrr : ${error}`);
    }
    i18n.changeLanguage('ar').then(() => {
      RNRestart.Restart();
    });
  };

  const handleChangeLanguageVietnam = async () => {
    try {
      await AsyncStorage.setItem('@APP:languageCode', 'vi');
    } catch (error) {
      console.log(` Hi Errorrrr : ${error}`);
    }
    i18n.changeLanguage('vi').then(() => {
      RNRestart.Restart();
    });
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <RoundedButton
        text={t('profile.logout')}
        textColor={Colors.white}
        textAlign="left"
        background={Colors.green01}
        borderColor="transparent"
        iconPosition="left"
        icon={
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              name="angle-right"
              color={Colors.white}
              size={30}
            />
          </View>
        }
        handleOnPress={handleLogout}
      />
      <RoundedButton
        text={`${t('profile.changeLanguage')} English`}
        textColor={Colors.white}
        textAlign="left"
        background={Colors.green01}
        borderColor="transparent"
        iconPosition="left"
        icon={
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              name="angle-right"
              color={Colors.white}
              size={30}
            />
          </View>
        }
        handleOnPress={handleChangeLanguageEnglish}
      />

      <RoundedButton
        text={`${t('profile.changeLanguage')} Arab`}
        textColor={Colors.white}
        textAlign="left"
        background={Colors.green01}
        borderColor="transparent"
        iconPosition="left"
        icon={
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              name="angle-right"
              color={Colors.white}
              size={30}
            />
          </View>
        }
        handleOnPress={handleChangeLanguageArab}
      />
      <RoundedButton
        text={`${t('profile.changeLanguage')} Vietnam`}
        textColor={Colors.white}
        textAlign="left"
        background={Colors.green01}
        borderColor="transparent"
        iconPosition="left"
        icon={
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              name="angle-right"
              color={Colors.white}
              size={30}
            />
          </View>
        }
        handleOnPress={handleChangeLanguageVietnam}
      />
    </View>
  );
};

export default ProfileScreen;
