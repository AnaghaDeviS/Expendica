import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  addexpensesForm = new FormGroup({
    expenseMadeBy : new FormControl(''),
    spentOn : new FormControl(''),
    amount: new FormControl(''),
    expenseSharedWith : new FormControl(''),
    expenseToBeSplit : new FormControl('')
  })

  spentCategories: any[] = [
    {value: '1', viewValue: 'Groceries'},
    {value: '2', viewValue: 'Meals'},
    {value: '3', viewValue: 'Travel'},
    {value: '4', viewValue: 'Shopping'},
    {value: '5', viewValue: 'Monthly Bills'},
    {value: '6', viewValue: 'Others'}
  ];

  splitCategories: any[] = [
    {value: '1', viewValue: 'Equally'},
    {value: '2', viewValue: 'Percentage'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.addexpensesForm.valid){
     console.log (this.addexpensesForm.getRawValue());
    } else {
      console.log ("There is an error in the form");
    }
  }

}
