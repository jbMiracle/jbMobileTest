import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DynamicTabBar from '../../components/DynamicTabBar/DynamicTabBar';
import ActiveOffers from '../../screens/Offers/ActiveOffers/ActiveOffers';
import InactiveOffers from '../../screens/Offers/InactiveOffers/InactiveOffers';

it('can render header tabs', () => {
  const renderer = new ShallowRenderer();
  const tabs = [
    { screenName: 'Active Offers', component: ActiveOffers },
    { screenName: 'Inactive Offers', component: InactiveOffers },
  ];
  DynamicTabBar(tabs);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
