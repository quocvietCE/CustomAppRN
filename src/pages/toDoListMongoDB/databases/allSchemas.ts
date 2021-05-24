import Realm, {ObjectSchema, ObjectType, ObjectPropsType} from 'realm';

export const TODO_LIST_SCHEMA = 'TodoList'; // Schemas'name
export const TODO_SCHEMA = 'Todo';

// ObjectSchema : {
//   name: string;
//   primaryKey?: string;
//   embedded?: boolean;
//   properties: PropertiesTypes;
// }

export const TodoSchema: Realm.ObjectSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', // primary key
    name: {type: 'string', indexed: true},
    done: {type: 'bool', default: false},
  },
};

export const TodoListSchema: Realm.ObjectSchema = {
  name: TODO_LIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
    todos: {type: 'list', objectType: TODO_SCHEMA},
  },
};

export const databaseOptions = {
  path: 'todoListApp.realm',
  schema: [TodoListSchema, TodoSchema],
  schemaVersion: 0, // optional
};

export const insertNewTodoList = (newTodoList: {
  name: string;
  id: number;
  creationDate: Date;
}) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(TODO_LIST_SCHEMA, newTodoList);
          resolve(newTodoList);
        });
      })
      .catch(error => reject(error));
  });

export const updateTodoList = (todoList: {name: string; id: string}) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingTodoList = realm.objectForPrimaryKey(
            TODO_LIST_SCHEMA,
            todoList.id,
          );
          updatingTodoList.name = todoList.name;
          resolve(true);
        });
      })
      .catch(error => reject(error));
  });

export const deleteTodoList = (todoListId: string) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingTodoList = realm.objectForPrimaryKey(
            TODO_LIST_SCHEMA,
            todoListId,
          );
          realm.delete(deletingTodoList.todos);
          realm.delete(deletingTodoList);
          resolve(true);
        });
      })
      .catch(error => reject(error));
  });

export const deleteAllTodoLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoList = realm.objects(TODO_LIST_SCHEMA);
          for (var index in allTodoList) {
            realm.delete(allTodoList[index].todos);
          }
          realm.delete(allTodoList);
          resolve(true);
        });
      })
      .catch(error => reject(error));
  });

export const queryAllTodoLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let allTodoLists = realm
          .objects(TODO_LIST_SCHEMA)
          .map((todo: Realm.Object, index) => {
            return {
              id: todo.id,
              name: todo.name,
              creationDate: `${todo.creationDate}`,
              backgroundColor: index % 2 === 0 ? '#9be7ff' : '#2286c3',
            };
          });
        console.log('queryAllTodoLists allTodoLists: ', allTodoLists);
        // realm.addListener('change', () => {
        //   resolve(allTodoLists);
        // });
        resolve(allTodoLists);
      })
      .catch(error => reject(error));
  });

export const filterTodoLists = searchText =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let filteredTodoLists = realm
          .objects(TODO_LIST_SCHEMA)
          .filtered(`name CONTAINS[c] "${searchText}"`) // [c] = case insensitive = LIKE
          .map((todo: Realm.Object, index) => {
            return {
              id: todo.id,
              name: todo.name,
              creationDate: `${todo.creationDate}`,
              backgroundColor: index % 2 === 0 ? '#9be7ff' : '#2286c3',
            };
          });
        resolve(filteredTodoLists);
      })
      .catch(error => reject(error));
  });

export const insertTodo2TodoList = (todoListId, newTodos) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let TodoList = realm.objectForPrimaryKey(TODO_LIST_SCHEMA, todoListId);
        realm.write(() => {
          for (var index in newTodos) {
            TodoList.todos.push(newTodos[index]);
          }
        });
        resolve(newTodos);
      })
      .catch(error => reject(error));
  });

export default new Realm(databaseOptions);
