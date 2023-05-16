import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cardStyle]',
})
export class ProductCardDirective {
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.boxShadow =
    //   ' 0.05rem 0.05rem rgb(65, 65, 65)';
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.boxShadow =
      ' 0.05rem 0.05rem rgb(65, 65, 65)';
  }
  @HostListener('mouseover') over() {
    this.element.nativeElement.style.boxShadow =
      ' 0.1rem 0.1rem rgb(65, 65, 65)';
  }
  @HostListener('mouseout') out() {
    this.element.nativeElement.style.boxShadow =
      ' 0.05rem 0.05rem rgb(65, 65, 65)';
  }
}
