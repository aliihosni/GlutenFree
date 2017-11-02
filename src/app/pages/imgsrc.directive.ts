import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImgsrc]'
})
export class ImgsrcDirective {

  @Input() url: string;

  constructor(el: ElementRef) {
    el.nativeElement.style.background = "url("+this.url+") no-repeat center bottom";
   }

}
