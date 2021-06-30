import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ToDoItem, {
  popupDialogComponent as PopupDialogComponent,
  showDeleteModal as showDeleteModalAll,
} from './ToDoItem';

import {
  updateTodoList,
  deleteTodoList,
  queryAllTodoLists,
  deleteAllTodoLists,
  databaseOptions,
  filterTodoLists,
} from './databases/allSchemas';

SimpleLineIcons.loadFont();

export const HeaderComponent = ({
  onPress,
  onPressDelete,
}: {
  onPress: () => void;
  onPressDelete: () => void;
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onPress} style={{marginRight: 10}}>
        <SimpleLineIcons name="plus" size={30} color="white" />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <SimpleLineIcons name="trash" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const ToDoListMongoDB = () => {
  const [todoLists, setToDoLists] = useState([]);
  const [showAddTodoList, setShowAddTodoList] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    queryAllTodoLists()
      .then(todoLists => {
        console.log('reloadData todoLists: ', todoLists);
        setToDoLists(todoLists);
      })
      .catch(error => {
        setToDoLists([]);
        console.log('ERROR reloadData: ', error);
      });
  };

  const addNewTodoList = () => {
    console.log('addNewTodoList');
    setShowAddTodoList(true);
  };

  const closeAddNewTodoList = () => {
    console.log('closeAddNewTodoList');
    setShowAddTodoList(false);
  };

  const onPressDeleteAll = () => {
    showDeleteModalAll();
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <HeaderComponent
        onPress={addNewTodoList}
        onPressDelete={onPressDeleteAll}
      />
      <TextInput
        style={{height: 50, margin: 5, borderWidth: 1, borderRadius: 5}}
        value={searchText}
        onChangeText={value => {
          setSearchText(value);
          filterTodoLists(value)
            .then(filteredTodoLists => {
              setToDoLists(filteredTodoLists);
            })
            .catch(error => {
              setToDoLists([]);
            });
        }}
      />
      <FlatList
        style={styles.flatList}
        data={todoLists}
        renderItem={({item, index}) => {
          return <ToDoItem item={item} itemIndex={index} />;
        }}
        keyExtractor={item => item.id}
      />

      <PopupDialogComponent
        isShow={showAddTodoList}
        closePopup={closeAddNewTodoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#d500f9',
    width: '100%',
    justifyContent: 'flex-end',
    padding: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flatList: {
    // flex: 1,
    // flexDirection: 'column',
  },
});

export default ToDoListMongoDB;
