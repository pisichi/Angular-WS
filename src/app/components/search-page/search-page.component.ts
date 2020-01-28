import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  selectedValues;

  dataList=[];
  
  ngOnInit() {
  }

  addData(event){
    this.dataList.push(event);
  }

}
