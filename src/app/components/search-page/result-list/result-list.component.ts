import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { switchMap } from 'rxjs/operators';

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

  
  delete(row) {
    this.empService.deleteEmployeeById(row.employeeId).pipe(
      switchMap(_ => this.empService.getEmployee(null))
    ).subscribe();
  }


}
