import ActiveOffers from './ActiveOffers/ActiveOffers';
import InactiveOffers from './InactiveOffers/InactiveOffers';
import DynamicTabBar from '../../components/DynamicTabBar/DynamicTabBar';

const tabs = [
  { screenName: 'Active Offers', component: ActiveOffers },
  { screenName: 'Inactive Offers', component: InactiveOffers },
];

export default DynamicTabBar(tabs, 'Offers');
