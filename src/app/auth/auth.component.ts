import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   
   authForm = new FormGroup({
  		username: new FormControl(""),
  		password: new FormControl("")
   })

  constructor() { }

  ngOnInit() {
  }

  saveForm() {
  	console.log(this.authForm.value)
  }

}
