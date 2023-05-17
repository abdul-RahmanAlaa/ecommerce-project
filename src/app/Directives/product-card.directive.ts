import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cardStyle]',
})
export class ProductCardDirective {
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.boxShadow =
    //   ' 0.05rem 0.05rem rgba(65, 65, 65, 0.5)';
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.boxShadow =
      ' 0.05rem 0.05rem rgba(65, 65, 65, 0.5)';
  }
  @HostListener('mouseover') over() {
    this.element.nativeElement.style.boxShadow =
      ' 0.1rem 0.1rem rgba(65, 65, 65, 0.5)';
  }
  @HostListener('mouseout') out() {
    this.element.nativeElement.style.boxShadow =
      ' 0.05rem 0.05rem rgba(65, 65, 65, 0.5)';
  }
}
