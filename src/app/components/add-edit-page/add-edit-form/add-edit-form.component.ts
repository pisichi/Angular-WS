import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ValidateName } from 'src/app/validators/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.sass']
})
export class AddEditFormComponent implements OnInit {

  myForm: FormGroup;
  employeeData;
  constructor(private empService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeData = null;
    this.myForm = new FormGroup({
      department: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50), ValidateName]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50), ValidateName])
    });

    this.empService.getDepartment().subscribe(res => {
      console.log(res);
      this.departmentList = res.map(item => {
        return { departmentCode: item.departmentCode, departmentName: item.departmentName };
      });
    });

    if (this.empService.selectedEmployee) {
      const selectedEmployee = this.empService.selectedEmployee;
      this.empService.getEmployeeById(selectedEmployee.employeeId).subscribe(val => {
        this.employeeData = val;
        console.log('getEmployeeById', val);
        this.myForm.patchValue({
          ...val,
          department: {
            departmentCode: val.department.departmentCode,
            departmentName: val.department.departmentName
          }
        });
      });
    }


  }


  @Output() addToList = new EventEmitter();

  departmentSelected;
  genderSelected;
  firstName;
  lastName;
  search;

  departmentList = [];

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


  submit(formData) {

    if (this.myForm.valid) {
      console.log(formData);
      formData = { ...formData, jobTitle: { jobTitleCode: '002' } };

      if (this.employeeData) {
        console.log(formData);
        formData = { ...this.employeeData, ...formData };
        this.empService.editEmployee(formData).subscribe(res => {
          this.router.navigate(['search']);
        });

      }
      else {
        this.empService.addEmployee(formData).subscribe(res => {
          this.router.navigate(['search']);
        });
      }
    }

    else {
      this.myForm.markAllAsTouched();
    }


    // console.log('value', {
    //   departmentCode: this.departmentSelected.departmentCode,
    //   departmentName: this.departmentSelected.departmentName,
    //   gender: this.genderSelected,
    //   firstName: this.firstName,
    //   lastName: this.lastName
    // });

    // this.addToList.emit({
    //   departmentCode: this.departmentSelected.departmentCode,
    //   departmentName: this.departmentSelected.departmentName,
    //   gender: this.genderSelected,
    //   firstName: this.firstName,
    //   lastName: this.lastName
    // });
  }

}
