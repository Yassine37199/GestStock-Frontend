import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] , filterString : string): any[] {
    const resultArray = [];
    if(filterString == ''){
      console.log(value);
      return value;
    }
    for (const item of value) {
      if (item.brand.toUpperCase() === filterString.toUpperCase()) {
        console.log(item);
        resultArray.push(item);
      }
      else console.log('nope');
    }

    return resultArray;
    
  }

}
