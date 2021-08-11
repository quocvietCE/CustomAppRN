import React, {useRef} from 'react';
// import PropTypes from 'prop-types';
import {View, Image, ActivityIndicator, Animated} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles from './styles';

const ImageUrl = ({
  sizeWidth,
  sizeHeight,
  sizeBorderRadius,
  defaultImage,
  source,
  isFullPic,
  bgColor,
  resizeMode,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const changeBackground = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => this.setState({}));
  };

  const isSvg = String(source).search('.svg') > -1;

  if (isSvg) {
    changeBackground();
  }

  return (
    <View
      style={{
        width: sizeWidth,
        height: sizeHeight,
        borderRadius: sizeBorderRadius,
        backgroundColor: bgColor || 'white',
      }}>
      <Animated.View
        style={[
          styles.animatedImage,
          styles.absolute,
          styles.justifyContentCenter,
          styles.alignItemsCenter,
          {borderRadius: sizeBorderRadius, opacity: fadeAnim},
        ]}>
        <ActivityIndicator size="small" color="rgba(88, 175, 43, 1)" />
      </Animated.View>
      {!isSvg ? (
        <View
          style={[
            styles.flexOne,
            styles.justifyContentCenter,
            styles.alignItemsCenter,
            styles.bgTransparent,
          ]}>
          <Image
            source={defaultImage ? source : {uri: source}}
            onLoadEnd={changeBackground}
            style={[
              {
                width: isFullPic ? sizeWidth : sizeWidth * 0.6,
                height: isFullPic ? sizeHeight : sizeHeight * 0.6,
                borderRadius: sizeBorderRadius,
              },
              styles.flexOne,
            ]}
            resizeMode={resizeMode}
          />
        </View>
      ) : (
        <View
          style={[
            styles.flexOne,
            styles.justifyContentCenter,
            styles.alignItemsCenter,
            styles.bgTransparent,
          ]}>
          <SvgUri
            style={styles.flexOne}
            width={isFullPic ? '100%' : '60%'}
            height={isFullPic ? '100%' : '60%'}
            uri={source || null}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

// ImageUrl.propTypes = {
//   sizeWidth: PropTypes.number,
//   sizeHeight: PropTypes.number,
//   sizeBorderRadius: PropTypes.number,
//   isFullPic: PropTypes.bool,
//   source: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.shape({}),
//   ]),
//   defaultImage: PropTypes.string,
//   bgColor: PropTypes.string,
//   resizeMode: PropTypes.string,
// };

ImageUrl.defaultProps = {
  sizeWidth: 64,
  sizeHeight: 64,
  sizeBorderRadius: 32,
  isFullPic: true,
  source: null,
  defaultImage: '',
  bgColor: '',
  resizeMode: 'contain',
};

export default ImageUrl;
