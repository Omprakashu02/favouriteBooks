import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNumberWithSingleDecimal]'
})
export class OnlyNumberWithDecimalDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any): void {
    const inputElement = this.el.nativeElement;
    const inputValue: string = inputElement.value;

    // Replace any non-numeric characters (except the decimal point)
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    // Allow only one decimal point
    const decimalCount = sanitizedValue.split('.').length - 1;
    if (decimalCount > 1) {
      const parts = sanitizedValue.split('.');
      const integerPart = parts[0];
      const decimalPart = parts.slice(1).join('');
      const newValue = `${integerPart}.${decimalPart.slice(0, 1)}`;
      inputElement.value = newValue;
    } else {
      inputElement.value = sanitizedValue;
    }
  }





}
