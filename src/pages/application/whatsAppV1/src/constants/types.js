import PropTypes, {number} from 'prop-types';

export type MainTabParamList = {
  Camera: undefined,
  Chats: undefined,
  Status: undefined,
  Calls: undefined,
};

// export type ChatRoom = {
//   id: String,
//   users: [User],
//   lastMessage: Message,
// };

const User = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUri: PropTypes.string,
};

const Message = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.number,
};

export const propTypesChatRoom = {
  id: PropTypes.string,
  users: PropTypes.arrayOf(User),
  lastMessage: PropTypes.shape(Message),
};

const UserObject = {
  id: '',
  name: '',
  imageUri: '',
};

export const MessageObject = {
  id: '',
  content: '',
  createdAt: '',
  user: UserObject,
};

export const ChatRoom = {
  id: '',
  users: [UserObject],
  lastMessage: MessageObject,
};

const UserObjectValue = {
  id: 'dwad3435435435643',
  name: 'Fuck you',
  imageUri:
    'https://kenh14cdn.com/2020/8/26/934302448453706559496612430600757359619184n-15984160661181498058789.jpg',
};

export const ChatRoomValue = {
  id: 'dwadaw343q4qdaw',
  users: [UserObjectValue],
  // lastMessage: MessageObject,
};

export const mapDataChatRoom = (data) => ({
  id: data.id || '',
  users: data.users || [UserObject],
  lastMessage: data.lastMessage || MessageObject,
});
