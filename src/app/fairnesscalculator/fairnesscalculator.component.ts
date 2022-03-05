import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fairnesscalculator',
  templateUrl: './fairnesscalculator.component.html',
  styleUrls: ['./fairnesscalculator.component.css']
})
export class FairnesscalculatorComponent implements OnInit {
  
  data : any[] = [];
  displayedColumns: string[] = ['name', 'totalExpenditure', 'debts', 'payTo'];
  dataSource: any[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.data = [
      {name : "Anagha", totalExpenditure : "500", debts : "150", payTo : "Kruthika"},
      {name : "Anagha", totalExpenditure : "500", debts : "150", payTo : "Kruthika"},
      {name : "Anagha", totalExpenditure : "500", debts : "150", payTo : "Kruthika"},
      {name : "Anagha", totalExpenditure : "500", debts : "150", payTo : "Kruthika"}
    ]
    this.dataSource = this.data;
  }

}
