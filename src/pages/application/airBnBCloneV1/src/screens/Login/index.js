import React, {useState} from 'react';
import InputField from '../../components/form/InputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import NextArrowButton from '../../components/buttons/NextArrowButton';
import NavBarButton from '../../components/buttons/NavBarButton';
import Notification from '../../components/Notification';
import {Colors, StylesApp} from '../../themes';
import styles from './styles';
import {login} from '../../store/slice/AuthSlice';
import {useTranslation} from 'react-i18next';
Icon.loadFont();

const LoginScreen = ({navigation}) => {
  const {t} = useTranslation();
  const loggedInState = useSelector(state => state.auth.loggedInState);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavBarButton
          location="right"
          color={Colors.white}
          text={t('logInScreen.forgotPassword')}
          handleButtonPress={() => navigation.navigate('ForgotPasswordStack')}
        />
      ),
      headerLeft: () => (
        <NavBarButton
          location="left"
          icon={<Icon name="angle-left" color={Colors.white} size={30} />}
          handleButtonPress={() => navigation.pop()}
        />
      ),
      headerStyle: StylesApp.transparentHeaderStyle,
      headerTransparent: true,
      headerTintColor: Colors.white,
      headerTitle: '',
    });
  }, [navigation, t]);

  const [formValid, setFormValid] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const dispatch = useDispatch();

  const handleNextButton = () => {
    const {navigate} = navigation;
    dispatch(login({email: emailAddress, password}));
    if (loggedInState) {
      setFormValid(true);
      navigate('MainTabNavigator');
    } else {
      setFormValid(false);
    }
  };

  const handleEmailChange = email => {
    const emailCheckRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailAddress(email);

    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        setValidEmail(true);
      }
    } else if (!emailCheckRegex.test(email)) {
      setValidEmail(false);
    }
  };

  const handlePasswordChange = passwordInput => {
    setPassword(passwordInput);

    if (!validPassword) {
      if (passwordInput.length > 4) {
        setValidPassword(true);
      }
    } else if (passwordInput <= 4) {
      setValidPassword(false);
    }
  };

  const handleCloseNotification = () => {
    setFormValid(true);
  };

  const toggleNextButtonState = () => {
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  };

  const showNotification = !formValid;
  const background = formValid ? Colors.green01 : Colors.darkOrange;
  const notificationMarginTop = showNotification ? 10 : 0;
  return (
    <KeyboardAvoidingView
      style={[{backgroundColor: background}, styles.wrapper]}
      behavior="padding">
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{t('logInScreen.login')}</Text>
          <InputField
            labelText={t('logInScreen.emailAddress')}
            labelTextSize={14}
            labelColor={Colors.white}
            textColor={Colors.white}
            borderBottomColor={Colors.white}
            inputType="email"
            customStyle={styles.customStyle}
            onChangeText={text => handleEmailChange(text)}
            showCheckMark={validEmail}
            autoFocus={true}
          />
          <InputField
            labelText={t('logInScreen.password')}
            labelTextSize={14}
            labelColor={Colors.white}
            textColor={Colors.white}
            borderBottomColor={Colors.white}
            inputType="password"
            customStyle={styles.customStyle}
            onChangeText={handlePasswordChange}
            showCheckMark={validPassword}
          />
        </ScrollView>
        <View style={styles.nextButton}>
          <NextArrowButton
            handleNextButton={handleNextButton}
            disabled={toggleNextButtonState()}
          />
        </View>
      </View>
      <View
        style={[
          styles.notificationWrapper,
          {marginTop: notificationMarginTop},
        ]}>
        <Notification
          showNotification={showNotification}
          handleCloseNotification={handleCloseNotification}
          type="Error"
          firstLine="Those credentials don't look right."
          secondLine="Please try again."
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
