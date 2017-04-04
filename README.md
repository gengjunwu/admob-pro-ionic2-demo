# Introduction #

This repository demonstrate a quick example for using ionic native plugin for Google AdMob in Ionic 2 apps. The app made in this example is based on [AdMob Ionic2 Demo by Jaivehall](https://github.com/jaivehall/admob-ionic2-demo). However, this example is completely rewritten for Ionic v2.3.0 & Ionic Native v3.4.4.

# Issues #
* The ionic native plugin may not work in Ionic View app. If it does not work, please use simulator or real device.

# Get Started #

* Install Ionic 2, Cordova to your system if not installed
```
$ npm install -g cordova ionic
```

* Create a new blank Ionic 2 project and navigate to the project folder
```
$ ionic start ionic2-admob-pro blank --v2
$ cd ionic2-admob-pro
```

* Install Ionic Native Plugin
```
$ ionic plugin add cordova-plugin-admobpro
$ npm install --save @ionic-native/admob
```

* Generate Provider for AdMob
```
$ ionic g provider admobPro
```

# Usage Example #
* Import plugins in src/app/app.module.ts file.
```
...
import { AdMob } from '@ionic-native/admob';
import { AdmobPro } from '../providers/admob-pro';

@NgModule({
  ...,
  providers: [
    ...,
    AdMob,
    AdmobPro
  ]
})
export class AppModule {}
```

* Import plugins on top of the src/providers/admob-pro.ts file.
```
...
import { AdMob, AdMobOptions, AdSize } from '@ionic-native/admob';
import { Platform } from 'ionic-angular';
```

* Import plugins on top of the src/pages/home.ts file.
```
...
import { AdmobPro } from '../../providers/admob-pro';
```

* Refer to individule file for code detail.

# Run project #
* Use Ionic CLI to build project, technically, this command is for compiling the project for testing, not for building for specific platform.
```
$ ionic serve
```

* As the cordova plugin is not available for web browser, you need to either use simulator or a real device to test your app. Alternatively, you can install Ionic View app to upload it to your account at Ionic to be able to download it on your device and try it on your phone. If you have not done so, go [here](https://apps.ionic.io/signup) to register an account and download the Ionic View from App Store or Google Play. Then you can run the following command, it will ask for your credentials for your Ionic account.
```
$ ionic upload
```

* To run on the real device, you need to add platform.
```
$ ionic plateform add android
$ ionic plateform add ios
```

* After adding platform, run the following command to install app on real device
```
$ ionic run android
```
or
```
$ ionic run ios
```

# Contact #
* [Gengjun Wu](https://www.bitmix.nz/)

# Reference #
* [Ionic 2 Framework](https://ionicframework.com/)
* [Ionic 2 AdMob Native Plugin](http://ionicframework.com/docs/native/admob/)
* [AdMob Ionic 2 Demo by Jaivehall](https://github.com/jaivehall/admob-ionic2-demo)

# Version #
* Ionic 2 v2.3.0 (2017-03-22)
* Ionic Native v3.4.4 (2017-03-30)

# System Info #
```
Cordova CLI: 6.5.0
Ionic Framework Version: 2.3.0
Ionic CLI Version: 2.2.1
Ionic App Lib Version: 2.2.0
Ionic App Scripts Version: 1.1.4
ios-deploy version: Not installed
ios-sim version: Not installed
OS: Windows 7
Node Version: v6.10.0
Xcode version: Not installed
```

# IDE #
* [Visual Studio Code](https://code.visualstudio.com/)

# Last Updated #
2017-Apr-04