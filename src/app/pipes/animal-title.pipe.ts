import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalTitle'
})
export class AnimalTitlePipe implements PipeTransform {

  transform(value: string): string {

    return value === 'pet' ? 'Pet' : 'Wild Animal';
  }

}
