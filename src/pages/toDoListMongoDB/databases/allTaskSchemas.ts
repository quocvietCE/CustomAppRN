// import Realm, {ObjectSchema} from 'realm';

export const TASK_SCHEMA = 'Task';

export const TaskSchema: ObjectSchema = {
  name: TASK_SCHEMA,
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

export const databaseOptions = {
  path: 'myrealm',
  schema: [TaskSchema],
  schemaVersion: 0, // optional
};

export const createTaskSample = async () => {
  // Add a couple of Tasks in a single, atomic transaction
  let task1, task2;

  const realm = await Realm.open(databaseOptions);

  realm.write(() => {
    task1 = realm.create(TASK_SCHEMA, {
      _id: 1,
      name: 'go grocery shopping',
      status: 'Open',
    });

    task2 = realm.create(TASK_SCHEMA, {
      _id: 2,
      name: 'go exercise',
      status: 'Open',
    });
    console.log(`created two tasks: ${task1.name} & ${task2.name}`);
  });
  // use task1 and task2
};
