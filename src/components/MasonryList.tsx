import React from 'react';
import Masonry from 'react-native-masonry-layout';
import {View, Image} from 'react-native';
import {photographyImages} from '../config/data/photography';
import {width, SPACING} from '../config/theme';

export default function MasonryList() {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref?.current) {
      const items = [...photographyImages, ...photographyImages].map(
        (image, index) => {
          return {
            height: width * Math.max(0, Math.random()) + width / 4,
            image,
            key: String(index),
          };
        },
      );
      ref.current.addItems(items);
    }
  }, []);
  return (
    <Masonry
      ref={ref}
      columns={2}
      style={{flex: 1, width}}
      contentContainerStyle={{padding: SPACING, paddingBottom: 40}}
      renderItem={(item) => (
        <View
          style={{
            margin: SPACING / 2,
            backgroundColor: '#fff',
            borderRadius: 0,
            overflow: 'hidden',
          }}>
          <Image source={{uri: item.image}} style={{height: item.height}} />
        </View>
      )}
    />
  );
}
