import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle, Text, Button } from 'native-base';
import {
  presentLocalNotification,
  presentLocalNotificationWithActions,
  scheduleLocalNotification,
  scheduleLocalNotificationWithActions,
  ActionCategoryIds,
} from '../../../services/notifications';

const styleDef = {
  button: {
    marginTop: 30,
  },
};

class Notifications extends Component {
  render() {
    const { style } = this.props;
    return (
      <View>
        <Button
          style={ style.button }
          onPress={ () => presentLocalNotification({
            title: 'Test Notification with no actions',
            body: 'Here in the body of the notification we can deliver a longer message.',
          }) }
        >
          <Text>Notify now</Text>
        </Button>
        <Button
          style={ style.button }
          onPress={ () => presentLocalNotificationWithActions(ActionCategoryIds.exampleA, {
            title: 'Test Notification with a few actions',
            body: 'Here in the body of the notification we can deliver a longer message.',
          }) }
        >
          <Text>Notify now with actions A</Text>
        </Button>
        <Button
          style={ style.button }
          onPress={ () => presentLocalNotificationWithActions(ActionCategoryIds.exampleB, {
            title: 'Test Notification with two simple actions',
            body: 'Here in the body of the notification we can deliver a longer message.',
          }) }
        >
          <Text>Notify now with actions B</Text>
        </Button>
        <Button
          style={ style.button }
          onPress={ () => scheduleLocalNotification({
            fire_date: Date.now() + 5e3,
            title: 'Test Scheduled Notification',
            body: 'body of the notification',
          }) }
        >
          <Text>Notify in 5 seconds</Text>
        </Button>
        <Button
          style={ style.button }
          onPress={ () => scheduleLocalNotificationWithActions(ActionCategoryIds.exampleA, {
            fire_date: Date.now() + 5e3,
            title: 'Test Notification with a few actions',
            body: 'Here in the body of the notification we can deliver a longer message.',
          }) }
        >
          <Text>Notify in 5s with actions A</Text>
        </Button>
        <Button
          style={ style.button }
          title='Trigger error from invalid action ID'
          onPress={ () => presentLocalNotificationWithActions('not an action ID') }
        >
          <Text>Trigger error from invalid action ID</Text>
        </Button>
      </View>
    );
  }
}

export default connectStyle('C360.NotificationsExamples', styleDef)(Notifications);
