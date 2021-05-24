import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Animated as AnimatedRN,
  StyleSheet,
  Alert,
  Pressable,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  updateTodoList,
  deleteTodoList,
  queryAllTodoLists,
  insertNewTodoList,
  deleteAllTodoLists,
} from './databases/allSchemas';

const {width, height} = Dimensions.get('window');

export const popupDialogComponent = ({
  isShow,
  closePopup,
  item,
  isAddNew = true,
}: {
  isShow: boolean;
  isAddNew?: boolean;
  closePopup: () => void;
  item: {
    id: number;
    name: string;
  };
}) => {
  const [name, setName] = useState('');

  const onSave = () => {
    if (name.trim() == '') {
      alert('Please enter todoList name');
      return;
    }
    closePopup();
    if (isAddNew) {
      const newTodoList = {
        id: Math.floor(Date.now() / 1000),
        name: name,
        creationDate: new Date().toISOString(),
      };
      // console.log('newTodoList: ', newTodoList);
      insertNewTodoList(newTodoList)
        .then()
        .catch(error => {
          alert(`insert new todoList error ${error}`);
        });
      setName('');
      // setIsAddNew(true);
    } else {
    }
  };

  return (
    <Modal animationType={'fade'} transparent={true} visible={isShow}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.wrapperTitle}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>
              {isAddNew ? 'Add a new TodoList' : 'Edit TodoList'}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={name}
            defaultValue={isAddNew ? '' : item.name}
            onChangeText={value => setName(value)}
            placeholder="Enter TodoList name"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Pressable
              style={{padding: 10, backgroundColor: '#6CBE45'}}
              onPress={onSave}>
              <Text style={styles.textBtn}>{isAddNew ? 'Save' : 'Update'}</Text>
            </Pressable>
            <Pressable
              onPress={closePopup}
              style={{padding: 10, backgroundColor: '#e20027'}}>
              <Text style={styles.textBtn}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const showDeleteModal = () => {
  Alert.alert(
    'Delete',
    'Delete a todoList',
    [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },

      {
        text: 'Yes',
        onPress: () => {
          deleteAllTodoLists();
        },
      },
    ],
    {cancelable: true},
  );
};

const ToDoItem = ({
  item,
  itemIndex,
}: {
  item: {
    backgroundColor: string;
    id: string;
    name: string;
    creationDate: string;
    onPressItem: any;
  };
  itemIndex: number;
}) => {
  const [showEdit, setShowEdit] = useState(false);

  const renderRightAction = (
    icon,
    color,
    backgroundColor,
    x,
    progress,
    onPress,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <AnimatedRN.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[styles.rightAction, {backgroundColor}]}
          onPress={onPress}>
          <Icon name={icon} size={30} color={color} />
        </RectButton>
      </AnimatedRN.View>
    );
  };

  const renderRightActions = progress => {
    return (
      <View style={{width: 192, flexDirection: 'row'}}>
        {renderRightAction(
          'playlist-edit',
          '#000',
          '#ccc',
          192,
          progress,
          showEditModal,
        )}
        {renderRightAction(
          'delete',
          '#fff',
          '#dd2c00',
          128,
          progress,
          showDeleteModal,
        )}
      </View>
    );
  };

  const showEditModal = () => {
    // console.log('showEditModal item: ', item);
    setShowEdit(true);
  };

  const PopupDialogComponent = ({
    isShow,
    closePopup,
    item,
    isAddNew = false,
  }: {
    isShow: boolean;
    isAddNew?: boolean;
    closePopup: () => void;
    item: {
      id: string;
      name: string;
    };
  }) => {
    const [name, setName] = useState(item.name);

    const onSave = () => {
      if (name.trim() == '') {
        alert('Please enter todoList name');
        return;
      }
      closePopup();
      if (isAddNew) {
        const newTodoList = {
          id: Math.floor(Date.now() / 1000),
          name: name,
          creationDate: new Date().toISOString(),
        };
        insertNewTodoList(newTodoList)
          .then()
          .catch(error => {
            alert(`insert new todoList error ${error}`);
          });
      } else {
        updateTodoList({name: name, id: item.id});
      }
    };

    return (
      <Modal animationType={'fade'} transparent={true} visible={isShow}>
        <View style={styles.container}>
          <View style={styles.containerModal}>
            <View style={styles.wrapperTitle}>
              <Text style={{fontSize: 15, textAlign: 'center'}}>
                {isAddNew ? 'Add a new TodoList' : 'Edit TodoList'}
              </Text>
            </View>
            <TextInput
              style={styles.textInput}
              value={name}
              defaultValue={isAddNew ? '' : item.name}
              onChangeText={value => setName(value)}
              placeholder="Enter TodoList name"
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Pressable
                style={{padding: 10, backgroundColor: '#6CBE45'}}
                onPress={onSave}>
                <Text style={styles.textBtn}>
                  {isAddNew ? 'Save' : 'Update'}
                </Text>
              </Pressable>
              <Pressable
                onPress={closePopup}
                style={{padding: 10, backgroundColor: '#e20027'}}>
                <Text style={styles.textBtn}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const showDeleteModal = () => {
    console.log('showDeleteModal item: ', item);
    Alert.alert(
      'Delete',
      'Delete a todoList',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteTodoList(item.id);
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <>
      <Swipeable
        friction={2}
        rightThreshold={40}
        containerStyle={{backgroundColor: item.backgroundColor}}
        renderRightActions={progress => renderRightActions(progress)}>
        <Pressable style={[styles.item]}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.creationDate}</Text>
        </Pressable>
      </Swipeable>
      <PopupDialogComponent
        isShow={showEdit}
        closePopup={() => setShowEdit(false)}
        item={{name: item.name, id: item.id}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 75,
    padding: 10,
    justifyContent: 'space-around',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 75,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textInput: {
    borderWidth: 0.5,
    height: 40,
    padding: 10,
    margin: 10,
    width: width * 0.5,
    borderRadius: 5,
  },
  textBtn: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  wrapperTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
});

export default ToDoItem;
