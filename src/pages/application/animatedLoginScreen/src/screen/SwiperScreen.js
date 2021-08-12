import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

class SwiperScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation_signup: null,
      animation_login: null,
      show: false,
    };
  }

  onIndexChanged(index) {
    if (index === 2) {
      this.setState({
        animation_signup: 'bounceInLeft',
        animation_login: 'bounceInRight',
        show: true,
      });
    } else {
      this.setState({
        animation_signup: null,
        animation_login: null,
        show: false,
      });
    }
  }

  render() {
    const { show } = this.state;
    const { navigation } = this.props;
    return (
      <Swiper
        loop={false}
        activeDot={<View style={styles.activeDot} />}
        dot={<View style={styles.dot} />}
        onIndexChanged={index => this.onIndexChanged(index)}>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              source={require('../assets/asset1.png')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Cloud Storage</Text>
            <Text style={styles.text}>Cloud Storage</Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              source={require('../assets/asset2.png')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Share Storage</Text>
            <Text style={styles.text}>Share Storage</Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              source={require('../assets/asset3.png')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.title}>Save Storage</Text>
            <Text style={styles.text}>Save Storage</Text>
            {show && (
              <View style={{ flexDirection: 'row' }}>
                <Animatable.View
                  animation={this.state.animation_signup}
                  delay={0}
                  duration={1500}
                  useNativeDriver>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignupScreen')}
                    style={[
                      styles.button,
                      {
                        borderColor: '#3465d9',
                        borderWidth: 1,
                        borderRadius: 50,
                        marginTop: 15,
                      },
                    ]}>
                    <Text style={{ color: '#3465d9' }}>Sign Up</Text>
                  </TouchableOpacity>
                </Animatable.View>

                <Animatable.View
                  animation={this.state.animation_login}
                  delay={0}
                  duration={1500}
                  useNativeDriver>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={[
                      styles.button,
                      {
                        backgroundColor: '#3465d9',
                        borderRadius: 50,
                        marginTop: 15,
                        marginLeft: 20,
                      },
                    ]}>
                    <Text style={{ color: 'white' }}>Login</Text>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
            )}
          </View>
        </View>
      </Swiper>
    );
  }
}

const { width, height } = Dimensions.get('window');
const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;
const width_button = width * 0.3;

export default SwiperScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width_image,
    height: height_image,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3465d9',
    textAlign: 'center',
  },
  text: {
    color: 'gray',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: 'rgba(52,101,217,0.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: '#3465d9',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  button: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
