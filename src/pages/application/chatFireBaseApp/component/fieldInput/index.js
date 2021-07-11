import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
// import {Item, Input} from 'native-base';
import {color} from '../../utility';
import {fieldHeight} from '../../utility/styleHelper/appStyle';

const FieldInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onFocus,
  onBlur,
  ref,
  onSubmitEditing,
  getRef,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color.WHITE}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        returnKeyType={'next'}
        ref={ref}
        getRef={getRef}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: color.DARK_GRAY,
    borderBottomWidth: 0,
    height: fieldHeight,
  },

  input: {
    paddingLeft: 16,
    color: color.WHITE,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

export default FieldInput;
