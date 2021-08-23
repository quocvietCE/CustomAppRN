import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ChatRoom} from '../../constants/types';

const ChatListItem = ({chatRoom = ChatRoom}) => {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: chatRoom.users[1].name,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.leftContainer}>
        <Image source={{uri: user.imageUri}} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.time}>
        {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatListItem;
