import { Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: 'button:not([button-track])'
})

export class ButtonTrackDirective {
  constructor(private elementRef: ElementRef) {
    console.log('[constructor] OG Track Directive');
    console.info('ElementRef: ', elementRef);
  }

  @HostListener('click')
  public onClick(): void {
    console.log('OG directive clicked');
  }
}
