import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  archives = [
    {year: 2021, month: 1},
    {year: 2021, month: 2},
    {year: 2021, month: 3}
  ];
  ngOnInit() {


  }

}
