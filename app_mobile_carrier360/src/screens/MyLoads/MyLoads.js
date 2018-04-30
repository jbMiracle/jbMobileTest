import AcceptanceNeeded from './AcceptanceNeeded/AcceptanceNeeded';
import DriverAssignment from './DriverAssignment/DriverAssignment';
import InTransit from './InTransit/InTransit';
import Completed from './Completed/Completed';
import DynamicTabBar from '../../components/DynamicTabBar/DynamicTabBar';

const tabs = [
  { screenName: 'Acceptance Needed', component: AcceptanceNeeded },
  { screenName: 'Driver Assignment', component: DriverAssignment },
  { screenName: 'In Transit', component: InTransit },
  { screenName: 'Completed', component: Completed },
];

export default DynamicTabBar(tabs, 'MyLoads');
