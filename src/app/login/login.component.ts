import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private router : Router, private readonly fb: FormBuilder) {
    this.loginform = this.fb.group ({
      email_address: ['', Validators.required],
      password: ['', [Validators.required, this.validatorPassword]]
    });

   }

   submitForm() {
     if(this.loginform.valid){
      console.log (this.loginform.getRawValue());
     } else {
       console.log ("There is an error in the form");
     }
    
   }

   validatorPassword(fc: FormControl) {
    const value = fc.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  }
   
  
  

  ngOnInit(): void {
  }
 login() {
   this.router.navigate( ["/homepage"]) 

 }
}
