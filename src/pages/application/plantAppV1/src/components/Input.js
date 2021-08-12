import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import Block from './Block';
import Button from './Button';
import theme from '../constants/theme';

Ionicons.loadFont();

const InputTextNew = ({
  label,
  rightLabel,
  email,
  phone,
  number,
  secure,
  error,
  style,
  onChangeText,
  defaultValue,
  onRightPress,
  rightStyle,
  value,
  ...props
}) => {
  const [toggleSecure, setToggleSecure] = useState(false);

  const renderLabel = () => {
    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  };

  const renderToggle = () => {
    if (!secure) {
      return null;
    }

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Ionicons
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )}
      </Button>
    );
  };

  const renderRight = () => {
    if (!rightLabel) {
      return null;
    }

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && {borderColor: theme.colors.accent},
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <Block flex={false} margin={[theme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        onChangeText={onChangeText}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    height: theme.sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'center',
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0,
  },
});

export default InputTextNew;
