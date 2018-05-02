import { driver } from '../Config/index';

export function buttonClick(elementId) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.click();
    })
    .catch((error) => {
      console.log('Test case failed because of invalid id' + (elementId));
      throw error;
    });
}

export function buttonClickXPath(elementId: string) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.click();
    })
    .catch((error) => {
      console.log('Test case is failed because of invalid id');
      throw error;
    });
}

export function notificationAccept() {
  return driver.execute('mobile:alert', { action: 'accept' })
    .catch((error) => {
      console.log('Test case is failed because of notification allow is not clicked');
      throw error;
    });
}

export function sendKeys(elementId, textInput) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.sendKeys(textInput).sleep(500);
    });
}

export function hideKeyboard(elementId) {
  return driver.elementById(elementId)
    .then((actualElement) => {
      actualElement.sendKeys('\n');
    });
}
