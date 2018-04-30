## Prerequisites

- [Homebrew](https://brew.sh/)
- [CocoaPods](https://cocoapods.org/) - best to install via Homebrew: `brew install cocoapods`

## Quick Start

- Clone repo
- `npm install`
- `npm run pods`
- `npm run [ios | android]`

## Setup

### Detox

You will need `applesimutils` installed to run the detox tests. To install using homebrew:

```
brew tap wix/brew
brew install applesimutils
```

More info can be found [here](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies).

### Reactotron

Install the [Reactotron desktop app](https://github.com/infinitered/reactotron/blob/master/docs/installing.md).

## In-App Style Guide

When running the app in development mode, an in-app style guide is available. From the `Home` screen, swipe right to access the Style Guide.

To add a component to the Style Guide, add the component to the `config.js` file in `src/StyleGuide/StyleComponents`. It's possible to optionally pass in a `props` property which will get passed into the rendered component.

```js
{
  component: Typography,
  menuTitle: 'Typography & Fonts',
},
{
  component: Colors,
  menuTitle: 'Color Palette',
},
{
  component: YourNewComponent,
  menuTitle: 'Awesome New Component',
  props: {} // optional
},
```

## Making External HTTP Requests

The request service uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. The `request` function should be passed a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object (see example below), and will return a Promise.

```js
import request from '../services/request';

const options = {
  method: 'GET',  // required
  url: 'http://www.example.com',  // required
  headers: { 'SomeHeader': 'SomeValue' },
};

request(options)
  .then(/* handle response */)
  .catch(/* handle error */);
```

## Notifications

The notification service provides support for local notifications, dispatched immediately or scheduled for later, and with options for actions.  See the [notification service README](./src/services/notifications/README.md) for details.

## Dynatrace

```js
import { NativeModules } from 'react-native';
const { RNDynatrace } = NativeModules;

RNDynatrace.startup('appId', 'envId', 'appUrl')
RNDynatrace.enterAction('actionName');
RNDynatrace.identifyUser('userId');

```

## Localization

See the [localization service README](./src/services/localization/README.md)

## Redux & Saga Paradigms

See [Redux & Saga Paradigms](./src/state/README.md)

## Resetting the project files

You may at some point find yourself in a situation which requires a complete reset of the project directory, as if you had freshly cloned the repository.  In these cases, it usually suffices to remove package and build directories: `npm run nuke:project` (or just `npm run nuke`).  Though sometimes you must also remove Xcode's DerivedData directories corresponding to your project: `npm run nuke:derived-data`.  Both of these commands will give you the chance to select which of the possible directories you would like to remove.  If you need to run both of the warheads, use `npm run nuke:all`; the `all` version deliberately destroys DerivedData directories first, because the script will not run once `node_modules` is gone.  Please enjoy responsibly.

## Add Vector Icons To Project

### React Native Vector Icons

General information about `react-native-vector-icons` can be found at the project repository](https://github.com/oblador/react-native-vector-icons)

These procedures are derived from the recommended setup steps from the project documentation.

### Procedure to Generate Font

####  Export vector assets to a directory of `.svg` files, one per icon.
- The file names assigned in this step will map directly to how they will be consumed in the application code.
- _example_: `jb-SomeIcon.svg` will become accessible using `<C360Icon name="jb-SomeIcon" />`

#### 1. Upload Existing Icons To [IcoMoon](https://icomoon.io/app/)
1. Click on top left MENU
2. Manage Projects
3. Import Project
4. Import the selection.json from `src/assets/fonts/C360Icons/`
5. Select the project and Click Load

#### 2. Go to [IcoMoon](https://icomoon.io/app/)'s web application to convert your icon files.
1. Confirm that all the existing font glyphs are visible in the IcoMoon interface from the Upload Existing Icons step
2. kress the `[+ Import Icons]` button at the top of the screen and then select all of the icon `.svg` files to include in the new font icon set.
3. Your icons will appear in an Untitled Icon set. Press the hamburger icon in the header for this subsection and select `Select All`
4. Click `Generate Font` button at the bottom right.
5. Confirm that the fonts look good in the preview.
6. Click `Download` in the bottom toolbar to save a zip of files to your computer.
7. Replace the files found in `src/assets/fonts/C360Icons/` with new versions from download

#### 3. To copy new file to iOS build:
1. Open the Xcode project to the `Project Navigator` view in the left pane of the application.
2. Ensure that your files have the same file names as those found in `app_mobile_carrier_360/C360Icons`
3. Drag the new icon files directly into the `app_mobile_carrier_360/C360Icons` directory and replace them.
4. Clear local build caches and then build to confirm that files are properly linked.

#### 4. To copy new font files to Android build:
1. Locate and rename your newly downloaded `.ttf` font file to be `icomoon.ttf`.
2. Replace the ttf file at this path: `/android/app/src/main/assets/fonts` with the new file.
3. Clear local build caches and then build to confirm that the new font file works as expected.

# Appium

## Why run appium scripts?
Appium is an open source test automation tool for mobile applications. It also allows you to run the automated tests on actual devices, emulators and simulators in both iOS and android platforms.

## Where can you run the script?
Appium scripts can be run on your local emulator or on test cloud using browserstack. Browserstack gives us options to select the OS versions with the manufacturers. So it will help us to test the compatibility of the application



## To run Test script using Appium :

### Install and configure Appium
1.	Ensure that you have a working iOS and android simulator
2.	Install Carthage via ‘brew install carthage’
3.	Install Appium from appium.io

### Run a single test script with Appium:
1.	Run `npm install`
2.	Run `npm run pods`
3.	Run `npm run ios/android`
	* This command will generate the .app and .apk file which will be used by the appium scripts.
4.	Run `.e2e/Appium/Scripts/Appium.sh <iOS/Android> <Test case to run>`
	* The test cases are placed at e2e/Appium/Tests

### Run a full suite of test scripts with Appium:
1.	Run `npm install`
2.	Run`npm run pods`
3.	Run `npm run ios/android`
4.	Run `.e2e/Appium/Scripts/Appium.sh <iOS/Android>`
	* This command will run all the scripts under e2e/Appium/Tests

### Run a single test script in Browserstack:
1.	Run `npm install`
2.	Run `npm run pods`
3.	Run `npm run ios/android`
4.	Run `.e2e/Appium/Scripts/Appium.sh <iOS/Android> <Test case to run> <REMOTE> <Browserstack Username> <Browserstack AccessKey> <.ipa file location/.apk file location>`

### Run a full suite of test scritps in Browserstack:
1.	Run `npm install`
2.	Run `npm run pods`
3.	Run `npm run ios/android`
	* This command will generate the .app and .apk file which will be used by the appium scripts.
4.	Run `.e2e/Appium/Scripts/Appium.sh <iOS/Android> "" <REMOTE> <Browserstack Username> <Browserstack AccessKey> <.ipa file location/.apk file location>`
