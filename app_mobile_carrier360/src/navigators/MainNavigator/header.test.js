import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainNavHeader from './header';
import navigationOnHome from './navigation-snapshots/home.json';
import navigationOnOffers from './navigation-snapshots/offers.json';
import navigationInOfferDetails from './navigation-snapshots/offers.offer-details.json';

describe('MainNav header component', () => {
  it('should shallow render with the back button inactive on the Home tab', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainNavHeader navigation={ navigationOnHome } />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should shallow render with the back button inactive on the Offers tab', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainNavHeader navigation={ navigationOnOffers } />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should shallow render with the back button active when in Offer Details', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainNavHeader navigation={ navigationInOfferDetails } />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
