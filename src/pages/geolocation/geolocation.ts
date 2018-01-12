import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  location : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geoLocation: Geolocation
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getLocation(){
    this.geoLocation.getCurrentPosition().then((resp) =>{
      this.location = {

        lat : resp.coords.latitude,
        lng : resp.coords.longitude
      }
    })
  }

}
