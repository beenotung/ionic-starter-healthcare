import {Component} from '@angular/core';
import {ContactPage} from '../contact/contact';
import {PatientHomePage} from "../patient-home/patient-home";

@Component({
  templateUrl: 'patient-tabs.html'
})
export class PatientTabsPage {

  tab1Root = PatientHomePage;
  tab2Root = ContactPage;

  constructor() {

  }
}
