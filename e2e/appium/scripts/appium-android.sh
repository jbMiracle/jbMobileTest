#!/bin/bash
TEST_PLAN=$1

echo "Checking to see an .APK file exists"

if [ ! -e android/app/build/outputs/apk/app-debug.apk ]
then
  echo ".apk file does not exist, executing npm run android..."
  npm run android
fi

echo "Running appium tests for Android"

./e2e/appium/scripts/appium.sh Android $TEST_PLAN
