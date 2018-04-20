import { driver } from '../Config/index';

/* Click Action */

function buttonClick(elementId) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log(`Clicked successfully on ${elementId}`);
    })
    .catch((error) => {
      throw new Error('Click failed');
    });
}

function buttonClickXPath(elementId: string) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log(`Clicked successfully on ${elementId}`);
    })
    .catch((error) => {
      throw new Error('Click failed');
    });
}

function notificationAccept() {
  return driver.execute('mobile:alert', { action: 'accept' })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of notification allow is not clicked');
    });
}

function notificationDismiss() {
  return driver.execute('mobile:alert', { action: 'dismiss' })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of notification allow is not clicked');
    });
}

export { buttonClick, buttonClickXPath, notificationAccept, notificationDismiss };
