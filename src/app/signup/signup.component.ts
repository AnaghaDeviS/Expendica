import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group ({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobilenumber: ['', Validators.minLength(10)],
      id_pwd: this.fb.group ({
        emailaddress: ['', Validators.required],
        password: ['',Validators.required],
        confirm_password: ['', Validators.required]
      }),
    });

  
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signupForm.valid){
      console.log (this.signupForm.value)
    } else {
      console.log ("There is an error in the form")
    }
    
  }

}
