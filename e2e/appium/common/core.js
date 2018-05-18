import wd from 'wd';
import { config, driver } from '../config/config';

export function buttonClick(elementId) {
  return driver.waitForElementByAccessibilityId(elementId)
    .then((actualElement) => {
      actualElement.click();
    })
    .catch((error) => {
      console.log(`Could not click button because of invalid id ${elementId}`);
      throw error;
    });
}

export function buttonClickById(elementId) {
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.click();
    })
    .catch((error) => {
      console.log(`Could not click button because of invalid id ${elementId}`);
      console.log(error);
      throw error;
    });
}

export function buttonClickXPath(elementId: string) {
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.click();
    })
    .catch((error) => {
      console.log(`Could not click button (xpath) because of invalid id ${elementId}`);
      throw error;
    });
}

export function deleteText(elementId) {
  let textLength = driver.waitForElementById(elementId).click();
  for (let i = 0; i < 10; i++) {
    textLength = textLength.sendKeys('\b');
    // action.perform();
  }
  return textLength;
}

export function acceptPrompt() {
  if (process.env.PLATFORM_NAME === 'iOS') {
    return driver.execute('mobile:alert', { action: 'accept' })
      .catch((error) => {
        console.log('Test case is failed because of notification allow is not clicked');
        throw error;
      });
    // return buttonClickXPath('//XCUIElementTypeButton[@name="Yes"]');
  } else {
    return buttonClickById('android:id/button1');
  }
}
export function dissmissPrompt() {
  if (process.env.PLATFORM_NAME === 'iOS') {
    return driver.execute('mobile:alert', { action: 'dismiss' })
      .catch((error) => {
        console.log('Test case is failed because of notification allow is not clicked');
        throw error;
      });
    // return buttonClickXPath('//XCUIElementTypeButton[@name="Yes"]');
  } else {
    return buttonClickById('android:id/button1');
  }
}

export function sendKeys(elementId, textInput) {
  return driver.waitForElementByAccessibilityId(elementId)
    .then((actualElement) => {
      actualElement.sendKeys(textInput);
    });
}

export function hideKeyboard(elementId) {
  if (config.platformName === 'iOS') {
    return driver.elementByAccessibilityId(elementId)
      .then((actualElement) => {
        actualElement.sendKeys('\n');
      });
  } else {
    return driver.hideDeviceKeyboard();
  }
}

// export function clearField(elementId) {
//   const a = driver.waitForElementByID(elementId).isDisplayed();
//   return (console.log(a));
// if (elementId) {
//   console.log('elementId is empty');
// } else {
//   actualElement.waitForElementById('Select All').click();
//   actualElement.waitForElementById('Cut').click();
// }

export function slowkey(elm, keys) {
  let action = driver.waitForElementByAccessibilityId(elm).click();
  for (let i = 0; i < keys.length; i++) {
    action = action.sendKeys(keys[i]);
    // action.perform();
  }
  return action;
}
