import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipeService implements PipeTransform {

  transform(value: String, limit?: number){
    if (!value) {
      return null;
    }

    const actualLimit = (limit) ? limit : 50;
    return value.substring(0, actualLimit) + '...';

  }
}
