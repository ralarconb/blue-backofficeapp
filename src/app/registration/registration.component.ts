import { Component, OnInit } from '@angular/core';

import { Registration } from '../model/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model = new Registration('', '', '', '');
  submitted = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    this.submitted = true;
  }

}
