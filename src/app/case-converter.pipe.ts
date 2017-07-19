import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseConverter'
})
export class CaseConverterPipe implements PipeTransform {

  prepositions = ['of', 'the', 'is', 'and'];

  transform(value: string, args?: any): any {
    let words = value.split(" ");
    for(let i=0; i < words.length; i++) {
      let word = words[i];
      if (!this.prepositions.includes(word.toLowerCase())  || i===0) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        words[i] = word.toLowerCase();
      }
    }
    return words.join(" ");
  }

}
