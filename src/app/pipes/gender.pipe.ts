import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, male = 'Male', female: 'Female'): any {
    return value === 'M' ? male : female;
  }

}
