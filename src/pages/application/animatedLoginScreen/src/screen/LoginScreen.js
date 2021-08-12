import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: null,
      valueEmail: '',
      valuePassword: '',
    };
  }

  onFocus(value) {
    this.setState({borderColor: value});
  }

  render() {
    const {navigation} = this.props;
    const {borderColor, valueEmail, valuePassword} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Login with Email and Password</Text>
        <View style={styles.action}>
          <View
            style={[
              styles.section,
              borderColor === 'email'
                ? {borderColor: '#3465d9'}
                : {borderColor: 'gray'},
            ]}>
            <MaterialIcons
              name="email"
              size={20}
              color={borderColor === 'email' ? '#3465d9' : 'black'}
            />
            <TextInput
              placeholder="Email"
              style={[
                styles.textInput,
                {color: borderColor === 'email' ? '#3465d9' : 'black'},
              ]}
              onFocus={() => this.onFocus('email')}
              value={valueEmail}
              onChangeText={(value) => this.setState({valueEmail: value})}
            />
          </View>

          <View
            style={[
              styles.section,
              borderColor === 'password'
                ? {borderColor: '#3465d9'}
                : {borderColor: 'gray'},
            ]}>
            <MaterialIcons
              name="lock-outline"
              size={20}
              color={borderColor === 'password' ? '#3465d9' : 'black'}
            />
            <TextInput
              placeholder="Password"
              style={[
                styles.textInput,
                {color: borderColor === 'password' ? '#3465d9' : 'black'},
              ]}
              secureTextEntry
              onFocus={() => this.onFocus('password')}
              value={valuePassword}
              onChangeText={(value) => this.setState({valuePassword: value})}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signup}>
          <Text style={[styles.textSign, {color: 'gray'}]}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={[styles.textSign, {color: '#3465d9', marginLeft: 3}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3465d9',
  },
  text: {
    color: 'gray',
  },
  action: {},
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#3465d9',
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSign: {
    textAlign: 'center',
  },
});
