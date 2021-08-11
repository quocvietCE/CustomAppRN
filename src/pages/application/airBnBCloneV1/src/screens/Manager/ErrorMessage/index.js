import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types';
import {StylesApp} from '../../../themes';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const ErrorMessage = ({navigation, route}) => {
  const {t} = useTranslation();

  const closeModal = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleErrorBox}>
          <Text style={[styles.errorText]}>{t('error')}</Text>
        </View>
        <View style={[StylesApp.bgWhite]}>
          <View style={styles.infoErrorBox}>
            <Text style={[styles.infoErrorText]}>
              {route.params.errorMessage || ''}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btnNormal}
            activeOpacity={0.9}
            onPress={closeModal}>
            <Text style={styles.txtBtnNormal}>{t('okay')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnNormal}
            activeOpacity={0.9}
            onPress={closeModal}>
            <Text style={styles.txtBtnNormal}>{t('tryAgain')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// ErrorMessage.propTypes = {
//   languageCode: PropTypes.string,
//   errorObject: PropTypes.shape({
//     errorType: PropTypes.string,
//     errorMessage: PropTypes.string,
//   }),
//   clearError: PropTypes.func,
// };

ErrorMessage.defaultProps = {
  languageCode: 'en',
  errorObject: {
    errorType: '',
    errorMessage: '',
  },
};

export default ErrorMessage;
