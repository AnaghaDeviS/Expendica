import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  // addexpensesForm = new FormGroup({
  //   expense_made_by : new FormControl(''),
  //   spent_on : new FormControl(''),
  //   expense_shared_with : new FormControl(''),
  //   expense_to_be_split : new FormControl('')
  // })

  constructor() { }

  ngOnInit(): void {
  }

  
  // onSubmit() {
  //   if(this.addexpensesForm.valid){
  //    console.log (this.addexpensesForm.getRawValue());
  //   } else {
  //     console.log ("There is an error in the form");
  //   }
  // }

}
