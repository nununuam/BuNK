// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Type, Parking, Save, Posts, Content, User } = initSchema(schema);

export {
  Type,
  Parking,
  Save,
  Posts,
  Content,
  User
};