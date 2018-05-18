#!/bin/bash
TEST_PLAN=$1

echo "Checking to see an .APP file exists"

if [ ! -e ios/build/Build/Products/Debug-iphonesimulator/app_mobile_carrier360.app ]
then
  echo ".app file does not exist, executing npm run ios..."
  npm run ios
fi

echo "Running appium tests for iOS"

./e2e/appium/scripts/appium.sh iOS $TEST_PLAN
