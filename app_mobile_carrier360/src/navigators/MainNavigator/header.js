import React from 'react';
import C360Header from '../../components/C360Header/C360Header';

const header = ({ navigation }) => {
  // Use this log to capture a JSON snapshot of the navigation prop for testing.
  // See the README in the `navigation-snapshots` folder for more info.
  // console.tron.log(navigation);

  const tabState = navigation.state.routes[0];
  const { routes: tabRoutes, index } = tabState;
  const currentTab = tabRoutes[index];
  const tabStackRoutes = currentTab.routes;
  const numberStackedRoutes = tabStackRoutes.length;
  const hasStackedScreen = currentTab && numberStackedRoutes > 1;
  const topScreen = hasStackedScreen ? tabStackRoutes[numberStackedRoutes - 1] : null;
  return (
    <C360Header
      showBackButton={ hasStackedScreen }
      backButtonOnPress={ () => navigation.pop() }
      title={ topScreen ? topScreen.routeName : 'Back' }
    />
  );
};

export default header;
