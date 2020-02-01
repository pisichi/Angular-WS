import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { getLocaleDateFormat } from '@angular/common';
import { Router }from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  departmentList = [
    {
      departmentCode: '001',
      departmentName: 'Sale'
    },
    {
      departmentCode: '002',
      departmentName: 'IT'
    },
    {
      departmentCode: '003',
      departmentName: 'HR'
    }
  ];

  genderList = [
    {
      label: 'Male',
      value: 'M'
    },

    {
      label: 'Female',
      value: 'F'
    },
  ]

  departmentSelected;
  genderSelected;
  firstName;
  lastName;
  search;

  constructor(
    private empService: EmployeeService,
    private router:Router) {}

  @Output() addToList = new EventEmitter();
  @Output() searchResult = new EventEmitter();

  

  ngOnInit() {
    // this.empService.getEmployee(null).subscribe(response=>{

    //   this.search = response;
    //   this.searchResult.emit(this.search);
    // });
    this.empService.selectedEmployee = null;
    this.getData();
  }

  addClick() {
    console.log('value', {
      departmentCode: this.departmentSelected.departmentCode,
      departmentName: this.departmentSelected.departmentName,
      gender: this.genderSelected,
      firstName: this.firstName,
      lastName: this.lastName
    });

    this.addToList.emit({
      departmentCode: this.departmentSelected.departmentCode,
      departmentName: this.departmentSelected.departmentName,
      gender: this.genderSelected,
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  // searchClickspare() {
  //   this.empService.getEmployee(null).subscribe(response => {
  //   this.search = response;
  //     console.log(this.genderSelected);
  //     // this.searchResult.emit(this.search.filter(function(item){
  //     //   return item.gender === this.genderSelected;
  //     //   // && item.department.departmentCode ==="002"         
  //     // }));

  //   });
  // }

  getData() {
    this.empService.getEmployee(null).subscribe(response => {

      this.search = response;

      console.log('response from api', this.search);
      this.searchResult.emit(this.search);
    });
  }


  searchClick(event) {
    const formData = {
      departmentCode: this.departmentSelected ? this.departmentSelected.departmentCode : null,
      gender : this.genderSelected,
      firstName : this.firstName,
      lastName : this.lastName
    };
    this.removeEmpty(formData);
    this.empService.getEmployee(formData).subscribe(response => {
      console.log('response from api ' , response);
      this.searchResult.emit(response);

    });
  }

  removeEmpty(obj) {
    Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
  }

  gotoAdd() {
    this.router.navigate(['add']);
  }

}



