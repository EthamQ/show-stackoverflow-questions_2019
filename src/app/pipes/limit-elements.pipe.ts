import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitElements'
})
export class LimitElementsPipe implements PipeTransform {

  /**
   * Remove any elements from the array with an index greater or equal to limit.
   */
  transform(array: any[], limit: number): any[] {
    return array.filter((el, i) => i < limit);
  }

}
