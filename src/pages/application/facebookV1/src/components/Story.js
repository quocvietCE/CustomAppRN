import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Avatar from './Avatar';
import storyList from '../hardData/storyList';

const linkImage =
  'https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg';

const Story = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={storyList}
          style={styles.scrollView}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image
                style={styles.cardStory}
                source={{
                  uri: item.linkImage,
                }}
              />
              <View style={styles.cardUser}>
                <Avatar
                  source={item.avatar}
                  online={item.online}
                  story={item.story}
                />
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={({id}) => id}
          ListHeaderComponent={
            <View style={styles.card}>
              <Image
                style={styles.cardStory}
                source={{
                  uri: linkImage,
                }}
              />
              <View style={styles.cardUser}>
                <AntDesign name="plus" size={24} color="#1777f2" />
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.text}>Add To Story</Text>
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 192,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    paddingLeft: 11,
  },
  card: {
    width: 106,
    height: 170,
    position: 'relative',
    marginRight: 8,
  },
  cardStory: {
    borderRadius: 12,
    width: '100%',
    height: 170,
  },
  cardUser: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 12,
    left: 9,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.4)',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
});
