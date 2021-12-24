import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fairnesscalculator',
  templateUrl: './fairnesscalculator.component.html',
  styleUrls: ['./fairnesscalculator.component.css']
})
export class FairnesscalculatorComponent implements OnInit {
  
  data : Array<any>;

  constructor() { 
    this.data = [
      {name : "Anagha", total_expenditure : "500", debts : "150", pay_to : "Kruthika"},
      {name : "Anagha", total_expenditure : "500", debts : "150", pay_to : "Kruthika"},
      {name : "Anagha", total_expenditure : "500", debts : "150", pay_to : "Kruthika"},
      {name : "Anagha", total_expenditure : "500", debts : "150", pay_to : "Kruthika"}
    ]
  }

  ngOnInit(): void {
  }

}
