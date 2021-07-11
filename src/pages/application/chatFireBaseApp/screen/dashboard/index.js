import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Alert,
  Text,
  View,
  FlatList,
  Platform,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {Profile, ShowUsers, StickyHeader} from '../../component';
import firebase from '../../firebase/config';
import {color} from '../../utility';
import {Store} from '../../context/store';
import {LOADING_STOP, LOADING_START} from '../../context/actions/type';
import {uuid, smallDeviceHeight} from '../../utility/constants';
import {clearAsyncStorage} from '../../asyncStorage';
import {deviceHeight} from '../../utility/styleHelper/appStyle';
import {UpdateUser, LogOutUser} from '../../network';

export default ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;

  const [userDetail, setUserDetail] = useState({
    id: '',
    name: '',
    profileImg: '',
  });
  const [getScrollPosition, setScrollPosition] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const {profileImg, name} = userDetail;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcons
          name="logout"
          size={26}
          color={color.WHITE}
          style={{right: 10}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Are you sure to log out',
              [
                {
                  text: 'Yes',
                  onPress: () => logout(),
                },
                {
                  text: 'No',
                },
              ],
              {cancelable: false},
            )
          }
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatchLoaderAction({
      type: LOADING_START,
    });
    try {
      firebase
        .database()
        .ref('users')
        .on('value', dataSnapshot => {
          let users = [];
          let currentUser = {
            id: '',
            name: '',
            profileImg: '',
          };
          // console.log('dataSnapshot: ', dataSnapshot);
          // console.log('dataSnapshot.val(): ', dataSnapshot.val());
          // console.log(
          //   'Object(dataSnapshot.val()).values: ',
          //   Object.values(dataSnapshot.val()),
          // );
          Object.values(dataSnapshot.val()).forEach(child => {
            if (uuid === child.uuid) {
              currentUser.id = uuid;
              currentUser.name = child.name;
              currentUser.profileImg = child.profileImg;
            } else {
              users.push({
                id: child.uuid,
                name: child.name,
                profileImg: child.profileImg,
              });
            }
          });
          // console.log('currentUser: ', currentUser);
          // console.log('users: ', users);
          setUserDetail(currentUser);
          setAllUsers(users);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
        });
    } catch (error) {
      alert(error);
      dispatchLoaderAction({
        type: LOADING_STOP,
      });
    }
  }, []);

  const selectPhotoTapped = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
      },
      mediaType: 'photo',
      quality: Platform.OS === 'ios' ? 0.1 : 1,
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // Base 64 image:
        let source = 'data:image/png;base64,' + response.assets[0].base64;
        dispatchLoaderAction({
          type: LOADING_START,
        });
        UpdateUser(uuid, source)
          .then(() => {
            setUserDetail({
              ...userDetail,
              profileImg: source,
            });
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
          })
          .catch(() => {
            alert(err);
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
          });
      }
    });
  };
  // * LOG OUT
  const logout = () => {
    LogOutUser()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.replace('Login');
          })
          .catch(err => console.log(err));
      })
      .catch(err => alert(err));
  };

  // * ON IMAGE TAP
  const imgTap = (profileImg, name) => {
    if (profileImg) {
      navigation.navigate('ShowFullImg', {name, img: profileImg});
    } else {
      navigation.navigate('ShowFullImg', {
        name,
        imgText: name.charAt(0),
      });
    }
  };

  // * ON NAME TAP
  const nameTap = (profileImg, name, guestUserId) => {
    if (!profileImg) {
      navigation.navigate('Chat', {
        name,
        imgText: name.charAt(0),
        guestUserId,
        currentUserId: uuid,
      });
    } else {
      navigation.navigate('Chat', {
        name,
        img: profileImg,
        guestUserId,
        currentUserId: uuid,
      });
    }
  };
  // * GET OPACITY

  const getOpacity = () => {
    if (deviceHeight < smallDeviceHeight) {
      return deviceHeight / 4;
    } else {
      return deviceHeight / 6;
    }
  };

  // console.log('allUsers: ', allUsers);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.BLACK}}>
      {getScrollPosition > getOpacity() && (
        <StickyHeader
          name={name}
          img={profileImg}
          onImgTap={() => imgTap(profileImg, name)}
        />
      )}

      {/* ALL USERS */}
      <FlatList
        alwaysBounceVertical={false}
        data={allUsers}
        keyExtractor={(_, index) => index.toString()}
        onScroll={event => setScrollPosition(event.nativeEvent.contentOffset.y)}
        ListHeaderComponent={
          <View
            style={{
              opacity:
                getScrollPosition < getOpacity()
                  ? (getOpacity() - getScrollPosition) / 100
                  : 0,
            }}>
            <Profile
              img={profileImg}
              onImgTap={() => imgTap(profileImg, name)}
              onEditImgTap={() => selectPhotoTapped()}
              name={name}
            />
          </View>
        }
        renderItem={({item}) => {
          // console.log('item: ', item);
          return (
            <ShowUsers
              name={item.name}
              img={item.profileImg}
              onImgTap={() => imgTap(item.profileImg, item.name)}
              onNameTap={() => nameTap(item.profileImg, item.name, item.id)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
