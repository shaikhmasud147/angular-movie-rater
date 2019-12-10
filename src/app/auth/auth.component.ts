import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   
   authForm = new FormGroup({
  		username: new FormControl(''),
  		password: new FormControl('')
   })

   registerMode = false

  constructor(private apiService: ApiService,
              private cookieService: CookieService,
              private router: Router
            ) { }

  ngOnInit() {
    const mrToken = this.getAuthCookie()
    if(mrToken !== null && mrToken !== undefined) {
      this.router.navigate(['/movies'])
    }
  }

  saveForm() {
    if(!this.registerMode) {
      this.loginUser()
    }else{
      this.registerUser()
    }
    
  }

  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
    (result: TokenObj) => {
        //console.log(result)
        this.setAuthCookie(result)
        this.router.navigate(['/movies'])
    },
    error => console.log(error),
   )
  }

  registerUser() {
    this.apiService.registerUser(this.authForm.value).subscribe(
      result => {
          //console.log(result)
          this.setAuthCookie(result)
          this.router.navigate(['/movies'])
      },
      error => console.log(error),
    )
  }

  setAuthCookie(result) {
    this.cookieService.set('mr-token', result.token)
  }

  getAuthCookie() {
    this.cookieService.get('mr-token')
  }

  deleteAuthCookie() {
    this.cookieService.delete('mr-token')
  }

}
