import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Entypo.loadFont();
Fontisto.loadFont();

const InputBox = () => {
  const [message, setMessage] = useState('');

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  const onMicrophonePress = () => {};

  const onSendPress = () => {
    console.log(`Sending: ${message}`);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Fontisto name="laughing" size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          maxLength={500}
          value={message}
          onChangeText={(value) => setMessage(value)}
          placeholder={'Type a message'}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto
            name="camera"
            size={24}
            color="grey"
            style={styles.icon}
            numberOfLines={6}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
