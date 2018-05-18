import { locators } from '../common/locators';
import * as Core from '../common/core';
import * as Act from '../common/actions';
import { driver } from '../config/config';

export const navigation = () => {
  describe('Navigation Tests', async () => {
    // it('can click the Find Loads', async () => {
    //   await Act.login('jbhcac05', 'being747');
    //   await driver.setImplicitWaitTimeout(20000);
    //   await Core.buttonClick(locators.bottomNav.findLoads);
    //   await Act.logout();
    // });

    /* // it works
    it('can load the home screen', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Core.buttonClick(locators.bottomNav.offers);
      await Core.buttonClick(locators.bottomNav.home);
      await Act.logout();
    });
    it('can load the moremenu button', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Act.moreMenu();
    });
    it('can load the moremenuProfile button', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Act.moreMenuProfile();
    });
    it('can load the moremenuManageUsers button', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Act.moreMenuManageUsers();
    });
    it('can load the moremenuFeedback button', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Act.moreMenuFeedback();
    });
    it('can load notificationMenu button', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Act.notificationMenu();
    });

    it('can load the My Loads screen', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Core.buttonClick(locators.bottomNav.myLoads);
      await Act.logout();
    });

    it('can load the offers screen', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Core.buttonClick(locators.bottomNav.offers);
      await Act.logout();
    });

    it('can load the perks screen', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Core.buttonClick(locators.bottomNav.perks);
      await Act.logout();
    });

    it('can click the forgretpassword', async () => {
      await Core.buttonClick(locators.login.forgotPassword);
      //   await Core.buttonClick(locators.login.forgotPasswordInput);
      await Core.slowkey(locators.login.forgotPasswordInput, 'test@test.com');
      await Core.hideKeyboard(locators.login.forgotPasswordInput);
      await Core.buttonClick(locators.login.forgotPasswordRequestButton);
      await driver.sleep(10000);
      await driver.acceptAlert();
      // driver.switchTo().alert().accept();
    }); */
    it('can load the Inactive offers screen', async () => {
      await Act.login('jbhcac05', 'being747');
      await driver.setImplicitWaitTimeout(20000);
      await Core.buttonClick(locators.bottomNav.offers);
      await Core.buttonClick(locators.bottomNav.offers.inactiveOfferTab);
      await Act.logout();
    });
    // it('can load the My Loads Acceptance screen', async () => {
    //   await Act.login('jbhcac05', 'being747');
    //   await driver.setImplicitWaitTimeout(20000);
    //   await Core.buttonClick(locators.bottomNav.myLoads);
    //   await driver.setImplicitWaitTimeout(500);
    //   await Core.buttonClick(locators.myLoads.driverAssignmentTab);
    //   await driver.setImplicitWaitTimeout(500);
    //   await Core.buttonClick(locators.myLoads.acceptanceTab);
    //   await driver.setImplicitWaitTimeout(500);
    //   await Act.logout();
    // });
  });
};
