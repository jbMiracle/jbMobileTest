import driver from '../../Common/Driver';

/* Click Action */

/* function buttonClick(elementId: string, callback) {
  let message = '';
  driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log('I clicked login');
      message = 'I am done';
      callback(message);
    })
    .catch((error) => {
      console.log(error.message);
      message = 'Element condition was not satisfied!';
      callback(message);
    });
} */

// sowjanya

function buttonClick(elementId: string) {
  let message = '';
  return driver.waitForElementById(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log('I clicked');
      message = 'I am done';
    })

    .catch((error) => {
      message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of invalid id');
    });
}
function buttonClickXPath(elementId: string) {
  // let message = '';
  return driver.waitForElementByXPath(elementId)
    .then((actualElement) => {
      actualElement.click();
      console.log('I clicked');
      // message = 'I am done';
    })
    .catch((error) => {
      // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of invalid id');
    });
}
function notificationAlert() {
  return driver.execute('mobile:alert', { action: 'accept' })
    .catch((error) => {
    // message = 'Element condition was not satisfied!';
      throw new Error('Test case is failed because of notification allow is not clicked');
    });
}

export { buttonClick, buttonClickXPath, notificationAlert };
