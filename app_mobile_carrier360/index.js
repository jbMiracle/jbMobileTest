console.ignoredYellowBox = [
  'Sending `FCMTokenRefreshed` with no listeners registered',
];

if (__DEV__) {
  import('./ReactotronConfig').then(() => import('./src'));
} else {
  // no-op so that production code can keep console.tron.log statements
  console.tron = { log: () => false };

  import('./src');
}
