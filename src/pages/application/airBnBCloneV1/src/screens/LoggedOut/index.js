import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {Colors} from '../../themes';
import BounderButton from '../../components/buttons/RounderButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StylesApp} from '../../themes';
import NavBarButton from '../../components/buttons/NavBarButton';
import styles from './styles';
import {useTranslation} from 'react-i18next';
Icon.loadFont();

const LoggedOutScreen = ({navigation}) => {
  const {t} = useTranslation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavBarButton
          handleButtonPress={() => navigation.navigate('LoginStack')}
          location="right"
          color={Colors.white}
          text={t('logoutScreen.login')}
        />
      ),
      headerStyle: StylesApp.transparentHeaderStyle,
      headerTransparent: true,
      headerTintColor: Colors.white,
      headerTitle: '',
    });
  }, [navigation]);

  const onFacebookPress = () => {
    alert('Facebook button pressed');
  };

  function onCreateAccountPress() {
    alert('Create Account button pressed');
  }

  function onMoreOptionsPress() {
    alert('More options button pressed');
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.welcomeWrapper}>
        <Image
          source={require('../../assets/images/airbnb-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>
          {`${t('logoutScreen.welcomeTo')} Airbnb`}.
        </Text>
        <BounderButton
          text={`${t('logoutScreen.continueWith')} Facebook`}
          textColor={Colors.green01}
          background={Colors.white}
          icon={<Icon name="facebook" size={20} style={styles.facebookIcon} />}
          handleOnPress={onFacebookPress}
        />

        <BounderButton
          text={t('logoutScreen.createAccount')}
          textColor={Colors.white}
          handleOnPress={onCreateAccountPress}
        />

        <TouchableHighlight
          style={styles.moreOptionsButton}
          onPress={onMoreOptionsPress}>
          <Text style={styles.moreOptionsButtonText}>
            {t('logoutScreen.moreOptions')}
          </Text>
        </TouchableHighlight>

        <View style={styles.termsAndConditions}>
          <Text style={styles.termsText}>
            By tapping Continue, Create Account or More
          </Text>
          <Text style={styles.termsText}>options,</Text>
          <Text style={styles.termsText}>I agree to Airbnb's</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Terms of Service</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Payments Terms of Service</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Privacy Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, and</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>.</Text>
        </View>
      </View>
    </View>
  );
};

export default LoggedOutScreen;
