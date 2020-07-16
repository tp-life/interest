import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regText'
})
export class RegTextPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) return ''
    let reg = /<(\S*?)[^>]*>(.*?)<\/(\1)>/gm
    const text = value.replace(reg, '$2').replace(/<\S*? \/>/gi, '')
    return text;
  }

}
