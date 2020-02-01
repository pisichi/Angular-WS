import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  constructor(private empService:EmployeeService,private router:Router) { }

  @Input() data=[];

  @Input() searchData;
  
  ngOnInit() {
  }
  
  gotoEdit(row){
    this.empService.selectedEmployee = row;
    this.router.navigateByUrl('/edit');
  }

  gotoDelete(row){
    this.empService.selectedEmployee = row;
    
  }
}
