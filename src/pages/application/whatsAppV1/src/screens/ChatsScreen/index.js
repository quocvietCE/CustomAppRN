import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatListItem from '../../components/ChatListItem';

import {ChatRoomValue, mapDataChatRoom} from '../../constants/types';
import chatRooms from '../../constants/ChatRoom';
import NewMessageButton from '../../components/NewMessageButton';

const Chats = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({id}) => id}
        data={chatRooms}
        renderItem={({item}) => (
          <ChatListItem chatRoom={mapDataChatRoom(item)} />
        )}
      />
      <NewMessageButton />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
