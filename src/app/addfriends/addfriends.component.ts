import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  addfriendsForm = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl(''),
    emailaddress : new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.addfriendsForm.valid){
     console.log (this.addfriendsForm.getRawValue());
    } else {
      console.log ("There is an error in the form");
    }
  }

  

}
