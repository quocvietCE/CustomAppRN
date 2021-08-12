import React, {useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import theme from '../constants/theme';

const VALID_EMAIL = 'contact@gmail.com';
const VALID_PASSWORD = '123456';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const errors = [];

    Keyboard.dismiss();
    setLoading(true);
    console.log('email: ', email);
    console.log('email !== VALID_EMAIL: ', email !== VALID_EMAIL);
    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    setErrors(errors);
    setLoading(false);

    if (!errors.length) {
      navigation.navigate('Browse');
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  const onChangeTextEmail = (value) => {
    console.log('onChangeTextEmail value: ', value);
    setEmail(value);
  };

  const onChangeTextPass = (value) => {
    setPassword(value);
  };

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={email}
              onChangeText={onChangeTextEmail}
              value={email}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={password}
              onChangeText={onChangeTextPass}
              value={password}
            />
            <Button gradient onPress={() => handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')}>
              <Text
                gray
                caption
                center
                style={{textDecorationLine: 'underline'}}>
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default Login;
