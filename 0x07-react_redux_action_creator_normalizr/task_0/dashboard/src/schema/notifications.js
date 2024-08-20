// task_0/dashboard/src/schema/notifications.js

import * as notifications from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notifications.default.filter(notification => notification.author === userId);
}

