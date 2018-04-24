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

export function buttonClickXPath(elementId: string) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log(`Clicked successfully on ${elementId}`);
    })
    .catch((error) => {
      throw new Error('Click failed');
    });
}

export function notificationAccept() {
  return driver.execute('mobile:alert', { action: 'accept' })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of notification allow is not clicked');
    });
}

export function notificationDismiss() {
  return driver.execute('mobile:alert', { action: 'dismiss' })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of notification allow is not clicked');
    });
}

export function SendKeysById(elementId: string, elementId1: string) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.sendKeys(elementId1);
      console.log('I clicked enter send keys');
      // message = 'I am done';
    })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of enter send keys');
    });
}

export function sendKeys(elementId, textInput) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.sendKeys(textInput);
    });
}

export function hideKeyboard(elementId) {
  return driver.elementById(elementId)
    .then((actualElement) => {
      actualElement.sendKeys('\n');
    });
}

export function sendKeysByXpath(elementId, textInput) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.sendKeys(textInput);
    });
}

export function hideKeyboardByXpath(elementId) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.sendKeys('\n');
    });
}

export { buttonClick };
