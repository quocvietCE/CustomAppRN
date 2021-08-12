import React, {useState} from 'react';
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import theme from '../constants/theme';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    const errors = [];

    Keyboard.dismiss();
    setLoading(true);

    // check with backend API or with some static data
    if (!email) {
      errors.push('email');
    }
    if (!username) {
      errors.push('username');
    }
    if (!password) {
      errors.push('password');
    }

    setErrors(errors);
    setLoading(false);

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <SafeAreaView style={{flex: 1}}>
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Block middle>
            <Input
              email
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              label="Username"
              error={hasErrors('username')}
              style={[styles.input, hasErrors('username')]}
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button gradient onPress={() => handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sign Up
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate('Login')}>
              <Text
                gray
                caption
                center
                style={{textDecorationLine: 'underline'}}>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signup: {
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

export default Signup;
