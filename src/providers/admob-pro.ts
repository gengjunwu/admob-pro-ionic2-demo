import { Injectable } from '@angular/core';
import { AdMob, AdMobOptions, AdSize } from '@ionic-native/admob';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the AdmobPro provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdmobPro {
  
  public admobOpt: AdMobOptions;
  public admobAdSize: AdSize;
  public admobPositions = {
    NO_CHANGE: 0,
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP_RIGHT: 3,
    LEFT: 4,
    CENTER: 5,
    RIGHT: 6,
    BOTTOM_LEFT: 7,
    BOTTOM_CENTER: 8,
    BOTTOM_RIGHT: 9
  };
  //public admobAutoShow: boolean;
  private admobId;

  constructor(private platform: Platform, private admob: AdMob) {
    console.log('Hello AdmobPro Provider');
    platform.ready().then(() => {
      this.admobId = {};
      //this.admobAutoShow = false;
      
      // For Android
      if(platform.is('android')) {
        this.admobId = {
          banner: 'ca-app-pub-5764598489193881/1782118056',
					interstitial: 'ca-app-pub-5764598489193881/3258851252'
        };
      }

      // For iOS
      if(platform.is('ios')) {
        this.admobId = {
					banner: 'ca-app-pub-5764598489193881/2700448056',
					interstitial: 'ca-app-pub-5764598489193881/5653914453'
		    };
      }

      this.init();
    });
  }

  // Initialise AdMob.
  init() {
    console.log("AdMob initialising");
  	if(!this.admob) {
  		console.log("No AdMob?");
  		return;
  	} 

   	// Subscribe to AdMob events
    this.admob.onAdFailLoad().subscribe(() => {
      console.log('Ad failed on load.');
    });

    this.admob.onAdLoaded().subscribe(() => {
      console.log('Ad successfully loaded.');
    });

    this.admob.onAdPresent().subscribe(() => {
      console.log('Ad will be presented.');
    });

    this.admob.onAdLeaveApp().subscribe(() => {
      console.log('Ad clicked, redirecting to Ad now.')
    });

    this.admob.onAdDismiss().subscribe(() => {
      console.log('User dismissed Ad');
    });

    // Config default options to prepare Ads
    this.admobOpt = {
      // adId: String, // The ID of the ad to show
      adSize: 'SMART_BANNER', // Banner type size
      // width: Number, // Banner width, if set adSize to 'CUSTOM'
      // height: Number, // Banner height, if set adSize to 'CUSTOM'
      position: this.admob.AD_POSITION.BOTTOM_CENTER, // Banner type default position
      // x: Number, // Default X of banner
      // y: Number, // Default Y of banner
      isTesting: true, // If set to true, to receive test ads
      autoShow: true, // If set to true, no need call showBanner or showInterstitial
      // adExtras: adExtras, // Extra ad setting options
      // overlap: Boolean, // Whether or not ads can overlap
      // orientationRenew: Boolean, // Refresh the render of the ad if the orientation changes
      // license: any // License key for the plugin
    };

   	this.admob.setOptions(this.admobOpt)
    .then(() => {
      console.log('Options have been set.');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  prepareInterstitial(): Promise<any> {
    this.admobOpt.adId = this.admobId.interstitial; // Set adId before preparing interstitial Ad.
    return this.admob.prepareInterstitial(this.admobOpt)
    .then(() => {
      console.log('Ad interstitial is prepared, will be presented if autoShow is true, otherwise, call showInterstitial().');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  showInterstitial() {
    if(this.admobOpt.autoShow) {
      this.prepareInterstitial().then(() => {
        this.admob.showInterstitial();
      });
    } else {
      this.admob.showInterstitial();
    }
  }

  createBanner(): Promise<any> {
    this.admobOpt.adId = this.admobId.banner; // Set adId before creating banner Ad.
    return this.admob.createBanner(this.admobOpt)
    .then(() => {
      console.log('Ad banner is created, will be presented if autoShow is true, otherwise, call showBanner(position).');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  showBanner(position){
    if(this.admobOpt.autoShow) {
      this.createBanner().then(() => {
        this.admob.showBanner(position);
      });
    } else {
      this.admob.showBanner(position);
    }
  }

  hideBanner() {
    this.admob.hideBanner();
  }

  removeBanner() {
   	if(this.admob) this.admob.removeBanner();
  }
}