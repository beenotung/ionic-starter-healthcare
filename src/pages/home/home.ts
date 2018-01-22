import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {PatientTabsPage} from "../patient-tabs/patient-tabs";
import {config} from "../../app/app.config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  user = {username: '', password: ''};

  constructor(public navCtrl: NavController
    , private userService: UserServiceProvider) {
  }

  ngOnInit(): void {
    if (config.mode === 'dev') {
      this.user.username = 'ann';
      this.user.password = '123';
      this.login();
    }
  }

  login() {
    console.log('login to user', this.user);
    if (this.userService.login(this.user.username, this.user.password)) {
      console.log('login success');
      this.navCtrl.setRoot(PatientTabsPage);
    } else {
      console.log('login failed')
    }
  }

  signup() {
    console.log('sign up new user', this.user);
  }

  forget() {
    console.log('forget password')
  }
}
