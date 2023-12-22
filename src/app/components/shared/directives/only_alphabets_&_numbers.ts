import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyAlphabetsAndNumbers]'
})
export class OnlyAlphabetsAndNumbersDirective {

  // @HostBinding('autocomplete') public autocomplete;

  // constructor() {
  //   this.autocomplete = 'off';
  // }

  // @HostListener('input', ['$event']) onInputChange(event) {
  //   const initialValue = event.target.value;
  //   event.target.value = initialValue.replace(/[^a-zA-Z0-9]*/g, '');
  // }


  // number ,alphabets ,space  allow
  @HostBinding('autocomplete') public autocomplete:any;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue?.replace(/[^a-zA-Z0-9 ]/g, '');
  }
}

