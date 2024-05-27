import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependDollar',
  standalone: true
})
export class PrependDollarPipe implements PipeTransform {

  transform(value: string | null): string {
    if(value == null || typeof value !== 'string'){
      return "";
    } 
    return '$'+value;
  }
}
