import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
// import feedList from '../hardData/feedList';

const linkImage =
  'https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg';
const lingImageFeed =
  'https://cdn3.ivivu.com/2014/11/30-anh-phong-canh-vao-chung-ket-cuoc-thi-anh-Vnexpress-iVIVU.com-2.jpg';

const Feed = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={linkImage} />
            <View style={styles.headerPost}>
              <Text style={styles.user}>Linh Dan</Text>
              <View style={styles.row}>
                <Text style={styles.time}>9m</Text>
                <Entypo name="dot-single" size={12} color={'#747476'} />
                <Entypo name="globe" size={12} color={'#747476'} />
              </View>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color={'#222121'} />
        </View>
        <Text style={styles.post}>
          Hey, cutie. Just wanted to let you know that this story originally ran
          in our October issue, so if you like what you see, you should probably
          snag a hard copy ASAP. Bye!
        </Text>
        <Image
          source={{uri: lingImageFeed}}
          style={styles.photo}
          resizeMode="contain"
        />
        <View style={styles.footer}>
          <View style={styles.footerCount}>
            <View style={styles.row}>
              <View style={styles.iconCount}>
                <AntDesign name="like1" color="#fff" size={12} />
              </View>
              <Text style={styles.textCount}>88 likes</Text>
            </View>
            <Text style={styles.textCount}>2k comments</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.footerMenu}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <AntDesign name="like2" color="#424040" size={20} />
              </View>
              <Text style={styles.text}>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  color="#424040"
                  size={20}
                />
              </View>
              <Text style={styles.text}>Comments</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="share-outline"
                  color="#424040"
                  size={20}
                />
              </View>
              <Text style={styles.text}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomDivider} />
      </View>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: 11,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222121',
  },
  time: {
    fontSize: 9,
    color: '#747476',
  },
  post: {
    fontSize: 12,
    color: '#222121',
    lineHeight: 16,
    paddingHorizontal: 11,
  },
  photo: {
    marginTop: 9,
    width: '100%',
    height: 300,
  },
  footer: {
    paddingHorizontal: 11,
  },
  footerCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  iconCount: {
    backgroundColor: '#1878f3',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  textCount: {
    fontSize: 11,
    color: '#424040',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f9f9f9',
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  button: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    color: '#424040',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
  headerPost: {paddingLeft: 10},
});
