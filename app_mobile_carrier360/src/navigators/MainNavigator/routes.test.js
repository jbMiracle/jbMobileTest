import {
  routes,
  orderedRouteNames,
  initialRouteName,
} from './routes';

describe('Main Nav routes', () => {
  describe('route order definition', () => {
    it('should have the same number of routeNames as there are routes defined', () => {
      const numberOfRoutes = Object.keys(routes).length;
      expect(orderedRouteNames).toHaveLength(numberOfRoutes);
    });

    it('should only contain routeNames that are defined in routes', () => {
      orderedRouteNames.forEach(routeName => expect(routes).toHaveProperty(routeName));
    });
  });

  describe('initialRouteName', () => {
    it('should be one of the defined routes', () => {
      expect(routes).toHaveProperty(initialRouteName);
    });
  });
});
