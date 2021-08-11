import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableHighlight} from 'react-native';
import {Colors} from '../../themes';
import styles from './styles';
import {propTypesNavigation} from '../../config/constants/DefaultPropTypes';
import {useTranslation} from 'react-i18next';
Icon.loadFont();

const TurnOnNotificationsScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [pressNotifyBtn, setPressNotifyBtn] = useState(false);
  const [pressSkipBtn, setPressSkipBtn] = useState(false);

  const handleNotifyBtnHideUnderlay = () => {
    setPressNotifyBtn(false);
  };

  const handleNotifyBtnShowUnderlay = () => {
    setPressNotifyBtn(true);
  };

  const handleSkipBtnHideUnderlay = () => {
    setPressSkipBtn(false);
  };

  const handleSkipBtnShowUnderlay = () => {
    setPressSkipBtn(true);
  };

  // const navigateToLoggedIn = () => {
  //   const {navigate} = navigation;
  //   navigate('LoggedInTabStack');
  // };

  const navigateToLoggedIn = useCallback(() => {
    const {navigate} = navigation;
    navigate('LoggedInTabStack');
  }, [navigation]);

  const notifyBtnColor = pressNotifyBtn ? Colors.green02 : Colors.green01;
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Icon name="comments-o" size={46} style={styles.icon} />
        <Text style={styles.title}>{t('turnOnNotificationScreen.turnOn')}</Text>
        <Text style={styles.description}>
          {t('turnOnNotificationScreen.weCanLet')}
        </Text>
        <TouchableHighlight
          style={[{backgroundColor: notifyBtnColor}, styles.notifyButton]}
          onPress={navigateToLoggedIn}
          onShowUnderlay={handleNotifyBtnShowUnderlay}
          onHideUnderlay={handleNotifyBtnHideUnderlay}
          underlayColor={Colors.green02}>
          <Text style={[{color: Colors.white}, styles.buttonText]}>
            {t('turnOnNotificationScreen.yes')}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            pressSkipBtn ? styles.bgColorActive : styles.bgColorInActive,
            styles.skipButton,
          ]}
          onPress={navigateToLoggedIn}
          onShowUnderlay={handleSkipBtnShowUnderlay}
          onHideUnderlay={handleSkipBtnHideUnderlay}
          underlayColor={Colors.gray01}>
          <Text style={[{color: Colors.green01}, styles.buttonText]}>
            {t('turnOnNotificationScreen.skip')}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

TurnOnNotificationsScreen.propTypes = {
  navigation: propTypesNavigation,
};

export default TurnOnNotificationsScreen;
