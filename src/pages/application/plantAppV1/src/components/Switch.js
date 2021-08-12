import React from 'react';
import {Switch, Platform} from 'react-native';

import theme from '../constants/theme';

const GRAY_COLOR = 'rgba(168, 182, 200, 0.30)';

const SwitchInput = ({value, ...props}) => {
  let thumbColor = null;

  if (Platform.OS === 'android') {
    thumbColor = GRAY_COLOR;
    if (props.value) {
      thumbColor = theme.colors.secondary;
    }
  }

  return (
    <Switch
      thumbColor={thumbColor}
      ios_backgroundColor={GRAY_COLOR}
      trackColor={{
        // false: GRAY_COLOR,
        true: theme.colors.secondary,
      }}
      value={value}
      {...props}
    />
  );
};

export default SwitchInput;
