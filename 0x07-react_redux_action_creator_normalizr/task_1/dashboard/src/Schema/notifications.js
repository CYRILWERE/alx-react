// task_1/dashboard/src/schema/notifications.js

import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define the notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notification]);

// Export the normalized data
export { normalizedData };

