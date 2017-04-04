import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdmobPro } from '../../providers/admob-pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public adSize: any;
  public adPosition: number;
  public adAutoShow: boolean = false;
  public adPositionOpts = {};
  public keys;

  constructor(public navCtrl: NavController, private admobpro: AdmobPro) {
    this.adPositionOpts = this.admobpro.admobPositions;
    this.keys = Object.keys(this.admobpro.admobPositions);
  }

  createBanner() {
    console.log('createBanner() called.');
    this.admobpro.admobOpt.adSize = this.adSize;
    this.admobpro.admobOpt.position = this.adPosition;
    this.admobpro.admobOpt.autoShow = this.adAutoShow;
    this.admobpro.createBanner();
  }

  showBanner() {
    console.log('showBanner() called.');
    this.admobpro.admobOpt.autoShow = this.adAutoShow;
    this.admobpro.showBanner(this.adPosition);
  }

  removeBanner() {
    console.log('removeBanner() called.');
    this.admobpro.removeBanner();
  }

  hideBanner() {
    console.log('hideBanner() called.');
    this.admobpro.hideBanner();
  }

  prepareInterstitial() {
    console.log('prepareInterstitial() called.');
    this.admobpro.prepareInterstitial();
  }

  showInterstitial() {
    this.admobpro.admobOpt.autoShow = this.adAutoShow;
    console.log('showInterstitial() called.');
    this.admobpro.showInterstitial();
  }
}