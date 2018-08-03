import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
              private Auth:AngularFireAuth,
              private Database:AngularFireDatabase,
              public navCtrl: NavController,
              public alertCtrl:AlertController
            ) { };

  //  Create Alert 
  alert(message: string) 
  {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  // LogOut 
  logoutUser(): Promise<void>
  {
    const userId:string = this.Auth.auth.currentUser.uid;
    this.Database.database.ref(`/userProfile/${userId}`).off();
    return this.Auth.auth.signOut()
    .then( data => 
      {
        console.log('got some data', this.Auth.auth.currentUser);
        this.alert('SignOut Successfuly Goodbye :) ');
        this.navCtrl.setRoot( LoginPage );
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
  }

}
