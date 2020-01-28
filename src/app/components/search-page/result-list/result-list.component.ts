import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  constructor() { }

  @Input()
  data=[];


  ngOnInit() {
  }

}
