import {
  presentLocalNotification,
  presentLocalNotificationWithActions,
  scheduleLocalNotification,
  scheduleLocalNotificationWithActions,
  ActionCategoryIds,
} from '.';

const basicOptions = {
  title: 'Test Title',
  body: 'test body',
};

const basicScheduledOptions = {
  ...basicOptions,
  id: 'test-notification-id',
  fire_date: 1577836800,
};

describe('presentLocalNotification()', () => {
  it('should pass the appropriate options to FCM.presentLocalNotification()', () => {
    const combinedOptions = presentLocalNotification(basicOptions);

    expect(combinedOptions).toMatchSnapshot();
  });
});

describe('presentLocalNotificationWithActions()', () => {
  it('should pass the appropriate options to FCM.presentLocalNotification()', () => {
    const combinedOptions = presentLocalNotificationWithActions(ActionCategoryIds.exampleA, basicOptions);

    expect(combinedOptions).toMatchSnapshot();
  });

  it('should throw an error when passed an unregistered action category ID', () => {
    expect(() => {
      presentLocalNotificationWithActions('badActionId', basicOptions);
    }).toThrow();
  });
});

describe('scheduleLocalNotification()', () => {
  it('should pass the appropriate options to FCM.scheduleLocalNotification()', () => {
    const combinedOptions = scheduleLocalNotification(basicScheduledOptions);

    expect(combinedOptions).toMatchSnapshot();
  });
});

describe('scheduleLocalNotificationWithActions()', () => {
  it('should pass the appropriate options to FCM.scheduleLocalNotification()', () => {
    const combinedOptions = scheduleLocalNotificationWithActions(ActionCategoryIds.exampleA, basicScheduledOptions);

    expect(combinedOptions).toMatchSnapshot();
  });
});
