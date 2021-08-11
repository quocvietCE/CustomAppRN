import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, StylesApp} from '../../themes';
import InputField from '../../components/form/InputField';
import Notification from '../../components/Notification';
import NextArrowButton from '../../components/buttons/NextArrowButton';
import NavBarButton from '../../components/buttons/NavBarButton';
import styles from './styles';
Icon.loadFont();

const ForgotPasswordScreen = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NavBarButton
          handleButtonPress={() => navigation.navigate('LoginStack')}
          location="left"
          icon={<Icon name="angle-left" color={Colors.white} size={30} />}
        />
      ),
      headerStyle: StylesApp.transparentHeaderStyle,
      headerTransparent: true,
      headerTintColor: Colors.white,
      headerTitle: '',
    });
  }, [navigation]);

  const [formValid, setFormValid] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  const handleEmailChange = (email) => {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailAddress(email);

    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        setValidEmail(true);
      }
    } else if (!emailCheckRegex.test(email)) {
      setValidEmail(false);
    }
  };

  const goToNextStep = () => {
    const {navigate} = navigation;
    setTimeout(() => {
      if (emailAddress === 'wrong@email.com') {
        setFormValid(false);
        navigate('LoginStack');
      } else {
        setFormValid(true);
      }
    }, 2000);
  };

  const handleCloseNotification = () => {
    setFormValid(true);
  };

  const background = formValid ? Colors.green01 : Colors.darkOrange;
  const showNotification = !formValid;
  return (
    <KeyboardAvoidingView
      style={[{backgroundColor: background}, styles.wrapper]}
      behavior="padding">
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.forgotPasswordHeading}>Forgot your password</Text>
          <Text style={styles.forgotPasswordSubheading}>
            Enter your email to find your account
          </Text>
          <InputField
            customStyle={{marginBottom: 30}}
            textColor={Colors.white}
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor={Colors.white}
            borderBottomColor={Colors.white}
            inputType="email"
            onChangeText={(text) => handleEmailChange(text)}
            showCheckMark={validEmail}
          />
        </ScrollView>
        <View style={styles.nextButton}>
          <NextArrowButton
            handleNextButton={goToNextStep}
            disabled={!validEmail}
          />
        </View>
      </View>

      <View style={styles.notificationWrapper}>
        <Notification
          showNotification={showNotification}
          handleCloseNotification={handleCloseNotification}
          type="Error"
          firstLine="No account exists for the requested"
          secondLine="email address."
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ForgotPasswordScreen;
