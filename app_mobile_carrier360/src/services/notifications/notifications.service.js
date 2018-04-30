import { Platform } from 'react-native';
import FCM, {
  FCMEvent,
  NotificationActionType,
} from 'react-native-fcm';
import { ActionCategories } from './actionCategories';
import C360Colors from '../../themes/360Colors';

// Adjust as needed for convenience
const DefaultNotificationOptions = {
  priority: 'high',
  show_in_foreground: true,
  color: C360Colors.Blue500, // affects Android only
};

// Adjust these as we figure out which we will be using
const DesiredNotificationPermissions = {
  badge: true,
  sound: true,
  alert: true,
};

export function initializeNotifications() {
  setNotificationActionCategories();
  registerListener();

  return FCM.requestPermissions(DesiredNotificationPermissions)
    .then((result) => {
      console.tron.log(`notification permissions result: ${result}`);
      return result;
    })
    // TODO: decide what to do in case of permissions exceptions
    .catch(reason => console.warn(reason));
}

export function presentLocalNotification(options = {}) {
  checkNotificationOptions(options);

  return FCM.presentLocalNotification({
    ...DefaultNotificationOptions,
    ...options,
  });
}

export function presentLocalNotificationWithActions(actionCategoryId, options = {}) {
  const actionOptions = createActionOptions(actionCategoryId);

  return presentLocalNotification({
    ...options,
    ...actionOptions,
  });
}

export function scheduleLocalNotification(options = {}) {
  checkScheduledNotificationOptions(options);

  return FCM.scheduleLocalNotification({
    ...DefaultNotificationOptions,
    ...options,
    id: options.id || generateNotificationId(),
  });
}

export function scheduleLocalNotificationWithActions(actionCategoryId, options = {}) {
  const actionOptions = createActionOptions(actionCategoryId);

  return scheduleLocalNotification({
    ...options,
    ...actionOptions,
  });
}

function createActionOptions(actionCategoryId) {
  const actionCategory = ActionCategories[actionCategoryId];
  if (!actionCategory) {
    throw new Error(`"${actionCategoryId}" is not a registered action category ID`);
  }

  // This plugin only supports simple button actions on Android.
  // Filter out any text field actions for Android.
  const androidActions = actionCategory.actions.filter(action => action.type === NotificationActionType.Default);

  return Platform.select({
    ios: { click_action: actionCategoryId },
    android: { android_actions: JSON.stringify(androidActions) },
  });
}

function checkNotificationOptions(options = {}) {
  if (!('title' in options)) {
    console.warn('Please provide a notification title');
  }
  if (!('body' in options)) {
    console.warn('Please provide a notification body');
  }
}

function checkScheduledNotificationOptions(options) {
  checkNotificationOptions(options);
  if (!('fire_date' in options)) {
    console.warn('You must provide a fire_date in order to schedule a notification for later');
  }
}

function generateNotificationId() {
  return `jbhunt-carrier360-${Date.now()}`;
}

function setNotificationActionCategories() {
  if (Platform.OS === 'ios') {
    const iOSActionCategories = Object.keys(ActionCategories).map(id => ({ id, ...ActionCategories[id] }));
    return FCM.setNotificationCategories(iOSActionCategories);
  }
  return null;
}

function registerListener() {
  return FCM.on(FCMEvent.Notification, (notif) => {
    console.tron.log('received notification');
    console.tron.log(notif);
    // Here we will take action based on a notification.
    // This behavior is still TBD.
  });
}
