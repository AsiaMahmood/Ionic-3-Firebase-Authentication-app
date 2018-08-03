import { TabsPage } from './../tabs/tabs';
import { User } from './../../model/USER';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResetPasswordPage } from './../reset-password/reset-password'; 


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              private Auth:AngularFireAuth,
              private Database:AngularFireDatabase,
              public alertCtrl:AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // Create alert
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  // Login Function

  loginUser(user:User):Promise<any>
  {
    if(user.email != null && user.password !=null)
    {
      return this.Auth.auth.signInWithEmailAndPassword(user.email,user.password).then( data => 
        {
          console.log('got some data', this.Auth.auth.currentUser);
          this.alert('Success! You\'re logged in');
          this.navCtrl.setRoot( TabsPage );
          // user is logged in
        })
        .catch( error => {
          console.log('got an error', error);
          this.alert(error.message);
        })
    }
    else
    {
      this.alert('You need to Enter your email and password');
    }
  }

  // SignUp which means login to the app for the first time 
  signUpUser(user:User):Promise<any>
  {
    if(user.email != null && user.password !=null)
    {
      return this.Auth.auth.createUserWithEmailAndPassword(user.email , user.password).
      then(newUser => 
        {
          this.Database.database.ref(`/userProfile/${newUser.user.uid}/email`).set(user.email);
        }).then( data => 
        {
          console.log('got some data', this.Auth.auth.currentUser);
          this.alert('Success! You\'re Register in');
          this.navCtrl.setRoot( TabsPage );
        })
        .catch( error => {
          console.log('got an error', error);
          this.alert(error.message);
        })
    }
    else
    {
      this.alert('You need to Enter email and password');
    }
  }

  // ResetPassword 
  resetPassword()
  {
    this.navCtrl.push(ResetPasswordPage);
  }  

}
