import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  
  
  test:number =1;

  

  counter(i: number) {
    return new Array(i);
};

  name:string[] =[
    'david','tom','cat','tomas'
  ];

  constructor() { }

  ngOnInit() {
  }

  // onInput(){
  //   const value = (event.target as HTMLInputElement).value;
  //   console.log(value);
  //   this.test = value;
  // }

  add(){
    if(this.test<10)
  this.test +=1;


  }

  remove(){
    if(this.test>0)
    this.test -= 1;
  }

}
