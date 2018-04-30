import {
  NotificationActionType,
  NotificationActionOption,
  NotificationCategoryOption,
} from 'react-native-fcm';

export const ActionCategoryIds = {
  exampleA: 'com.jbhunt.carrier360.exampleA',
  exampleB: 'com.jbhunt.carrier360.exampleB',
};

export const ActionCategories = {
  [ActionCategoryIds.exampleA]: {
    actions: [
      {
        type: NotificationActionType.TextInput,
        id: 'reply',
        title: 'Quick Reply',
        textInputButtonTitle: 'Send',
        textInputPlaceholder: 'Say something',
        intentIdentifiers: [],
        options: NotificationActionOption.AuthenticationRequired,
      },
      {
        type: NotificationActionType.Default,
        id: 'view',
        title: 'View in App',
        intentIdentifiers: [],
        options: NotificationActionOption.Foreground,
      },
      {
        type: NotificationActionType.Default,
        id: 'dismiss',
        title: 'Dismiss',
        intentIdentifiers: [],
        options: NotificationActionOption.Destructive,
      },
    ],
    options: [
      NotificationCategoryOption.CustomDismissAction,
      NotificationCategoryOption.PreviewsShowTitle,
    ],
  },
  [ActionCategoryIds.exampleB]: {
    actions: [
      {
        type: NotificationActionType.Default,
        id: 'yes',
        title: 'Yes',
        intentIdentifiers: [],
        options: NotificationActionOption.Foreground,
      },
      {
        type: NotificationActionType.Default,
        id: 'no',
        title: 'No',
        intentIdentifiers: [],
        options: NotificationActionOption.Destructive,
      },
    ],
    options: [
      NotificationCategoryOption.CustomDismissAction,
      NotificationCategoryOption.PreviewsShowTitle,
    ],
  },
};
