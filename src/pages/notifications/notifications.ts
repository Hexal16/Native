import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  results : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private localNotification : LocalNotifications
            ) {

              localNotification.on('click', notification => {
                var data = JSON.parse(notification.data);
                this.results = data.name,
                alert(`notification recieved, yupii viiii!${data.name}`)
              });

              localNotification.on('error', err => {
                alert('error happened' + err);
              });
  }

  addNotification(){
    alert('added notification');
    this.localNotification.schedule({
      id: 1,
      text: 'Single Cool notification',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: {
        id: 21,
        name: 'Cool notification #21'
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
