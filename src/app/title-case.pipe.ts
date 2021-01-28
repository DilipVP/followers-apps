import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: String): any{

    if (!value) { return null; }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++){
     const word = words[i];
     if (this.isProposition(word) && i > 0) {
    words[i] = word.toLowerCase();
     }
    else {
    words[i] = this.toTitleCase(word);
     }
    }

    value = words.join(' ');

    return value;

  }

private toTitleCase(word: string): string{
  return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
}

  private isProposition(word: string): boolean{

    const propostion = [
      'of',
      'the'
    ];
    return propostion.includes(word.toLowerCase());
  }

}
