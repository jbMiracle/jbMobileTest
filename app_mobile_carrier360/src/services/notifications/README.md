# Notification Service

This service provides functions to present and schedule local notifications using [react-native-fcm](https://github.com/evollu/react-native-fcm).  While the FCM plugin does support remote notifications via Firebase Messaging, this service omits all remote notification features because Carrier 360 will not be using remote notifications.

## Creating Notifications

- `presentLocalNotification(options)` immediately dispatches a notification 
- `presentLocalNotificationWithActions(actionCategoryId, options)` immediately dispatches a notification with the actions specified by the `actionCategoryId`.  The `actionCategoryId` must be one of the registered category IDs (see below about actions).
- `scheduleLocalNotification(options)` schedules a notification to be presented at the given `fire_date`

### The `options` parameter

- `body: string` - The main text content of the notification
- `title?: string` - The text shown at the top of the notification
- `sound?: string` - Either `'default'` or the filename of the sound to play upon firing
- `icon?: string` - name of an image resource to use as the icon for the notification
- `id?: string` - A unique identifier used to specify which notification to cancel (scheduled notifications can be cancelled before they fire).  An `id` is automatically generated if you do not provide one.
- `priority?: string` - `'high'` or `'low'`; not sure of its effect, but could come into play depending on needs
- `show_in_foreground?: boolean` - Whether to present the notification while the app is in the foreground.  If this is `false` and the notification fires with the app in the foreground, then the code will still get the notification but the user will not see any sign of it.

You may supply addition data as custom properties of `options`.  There are several other properties that can be supplied within `options` but they are omitted here because they are not cross-platform.  If we need more features in notifications, then there might be some creative solutions for the features which are not yet cross-platform in `react-native-fcm`.

## Actions in Notifications

Since iOS and Android have different approaches to defining actions in notifications, this service opts to use the Apple way of defining actions and applies it to actions on Android as well.

An *Action Category* defines a set of actions that can be applied to any notification.  Define these in `actionCategories.js` following the pattern of the examples.  Each category is uniquely identified by a string `ActionCategoryId`.  You should only ever have to write the actual string literal of the category ID once - when defining it as a property of `ActionCategoryIds`.  Thereafter you can use the identifier by the contant you made, e.g. `ActionCategoryIds.exampleA` instead of `'com.jbhunt.carrier360.exampleA'`.