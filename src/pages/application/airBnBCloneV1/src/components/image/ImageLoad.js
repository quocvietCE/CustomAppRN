import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {Image, ImageBackground, ActivityIndicator, View} from 'react-native';
import styles from './styles';

const ImageLoad = ({
  style,
  source,
  resizeMode,
  borderRadius,
  backgroundColor,
  children,
  loadingStyle,
  placeholderSource,
  placeholderStyle,
  customImagePlaceholderDefaultStyle,
  isShowActivity,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoadEnd = () => {
    setIsLoaded(true);
  };

  const onError = () => {
    setIsError(true);
  };

  return (
    <ImageBackground
      onLoadEnd={onLoadEnd}
      onError={onError}
      style={[styles.backgroundImage, style]}
      source={source}
      resizeMode={resizeMode}
      borderRadius={8}>
      {isLoaded && !isError ? (
        children
      ) : (
        <View
          style={[
            styles.viewImageStyles,
            {borderRadius: borderRadius},
            backgroundColor ? {backgroundColor: backgroundColor} : {},
          ]}>
          {isShowActivity && !isError && (
            <ActivityIndicator
              style={styles.activityIndicator}
              size={loadingStyle ? loadingStyle.size : 'small'}
              color={loadingStyle ? loadingStyle.color : 'gray'}
            />
          )}
          <Image
            style={
              placeholderStyle
                ? placeholderStyle
                : [
                    styles.imagePlaceholderStyles,
                    customImagePlaceholderDefaultStyle,
                  ]
            }
            source={
              placeholderSource
                ? placeholderSource
                : require('../../assets/images/empty-image.png')
            }
          />
        </View>
      )}
      {children && <View style={styles.viewChildrenStyles}>{children}</View>}
    </ImageBackground>
  );
};

// ImageLoad.propTypes = {
//   isShowActivity: PropTypes.bool,
// };

// ImageLoad.defaultProps = {
//   isShowActivity: true,
// };

export default ImageLoad;
