import React, {useState, useRef} from 'react';
// import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {Colors} from '../../themes';
import {useTranslation} from 'react-i18next';

const InputField = ({
  defaultValue,
  labelText,
  labelTextSize,
  labelTextWeight,
  labelColor,
  textColor,
  borderBottomColor,
  inputType,
  customStyle,
  inputStyle,
  showCheckMark,
  autoFocus,
  autoCapitalize,
  placeholder,
  onChangeText,
}) => {
  const {t} = useTranslation();
  const [secureInput, setSecureInput] = useState(
    !(inputType === 'text' || inputType === 'email'),
  );

  const scaleCheckMarkValue = useRef(new Animated.Value(0)).current;

  const [inputValue, setInputValue] = useState(defaultValue);

  const scaleCheckMark = (value) => {
    Animated.timing(scaleCheckMarkValue, {
      toValue: value,
      duration: 400,
      easing: Easing.easeOutBack,
      useNativeDriver: true,
    }).start();
  };

  const toggleShowPassword = () => {
    setSecureInput(!secureInput);
  };

  const onChangeTextValue = (text) => {
    onChangeText(text);
    setInputValue(text);
  };

  const fontSize = labelTextSize || 14;
  const fontWeight = labelTextWeight || '700';
  const color = labelColor || Colors.white;
  const inputColor = textColor || Colors.white;
  const borderBottom = borderBottomColor || 'transparent';
  const keyboardType = inputType === 'email' ? 'email-address' : 'default';
  const customInputStyle = inputStyle || {};
  if (!inputStyle || (inputStyle && !inputStyle.paddingBottom)) {
    customInputStyle.paddingBottom = 5;
  }

  const iconScale = scaleCheckMarkValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.01, 1.6, 1],
  });

  const scaleValue = showCheckMark ? 1 : 0;
  scaleCheckMark(scaleValue);
  return (
    <View style={[customStyle, styles.wrapper]}>
      <Text style={[{fontWeight, color, fontSize}, styles.label]}>
        {labelText}
      </Text>
      {inputType === 'password' ? (
        <TouchableOpacity
          style={styles.showButton}
          onPress={toggleShowPassword}>
          <Text style={styles.showButtonText}>
            {secureInput ? t('logInScreen.show') : t('logInScreen.hide')}
          </Text>
        </TouchableOpacity>
      ) : null}
      <Animated.View
        style={[{transform: [{scale: iconScale}]}, styles.checkmarkWrapper]}>
        <Icon name="check" color={Colors.white} size={20} />
      </Animated.View>
      <TextInput
        style={[
          {color: inputColor, borderBottomColor: borderBottom},
          inputStyle,
          styles.inputField,
        ]}
        secureTextEntry={secureInput}
        onChangeText={(text) => onChangeTextValue(text)}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        defaultValue={inputValue}
        value={inputValue}
        selectionColor={'white'}
      />
    </View>
  );
};

export default InputField;

// InputField.propTypes = {
//   labelText: PropTypes.string.isRequired,
//   labelTextSize: PropTypes.number,
//   labelColor: PropTypes.string,
//   textColor: PropTypes.string,
//   borderBottomColor: PropTypes.string,
//   inputType: PropTypes.string.isRequired,
//   customStyle: PropTypes.object,
//   onChangeText: PropTypes.func,
//   showCheckMark: PropTypes.bool.isRequired,
//   autoFocus: PropTypes.bool,
//   autoCapitalize: PropTypes.bool,
//   labelTextWeight: PropTypes.string,
//   inputStyle: PropTypes.object,
//   placeholder: PropTypes.string,
//   defaultValue: PropTypes.string,
// };

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    marginBottom: 20,
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
  },
  showButton: {
    position: 'absolute',
    right: 0,
  },
  showButtonText: {
    color: Colors.white,
    fontWeight: '700',
  },
  checkmarkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 12,
  },
});
