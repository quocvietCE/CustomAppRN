import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CircularSlider from './CircularSlider'

// const slider1 = 270;
// const slider2 = 180;

const CircularSliderApp = () => {

  const [slider1, setSlider1] = React.useState(270);
  const [slider2, setSlider2] = React.useState(180);

    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.slider1}>
            <CircularSlider width={200} height={200} meterColor='#0cd' textColor='#fff'
              value={slider1} onValueChange={(value)=>setSlider1(value)}/>
          </View>
          <View style={styles.slider2}>
            <CircularSlider width={150} height={150} meterColor='#ffa' textColor='#000'
              value={slider2} onValueChange={(value)=> setSlider2(value)}/>
          </View>
        </View>
      </View>
    );
  
}

export default CircularSliderApp;

const styles = StyleSheet.create({
  root: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    width: 200,
    height: 200
  },
  slider1: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  slider2: {
    position: 'absolute',
    top: 25,
    left: 25
  }
});