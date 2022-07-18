import { Directive, ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: '[button-track]'
})

export class NewButtonTrackDirective {

  constructor(private elementRef: ElementRef) {
    console.log('[constructor] New Track Directive');
    console.info('ElementRef: ', elementRef);
  }

  doStuff(formGroup: FormGroup): void {
    console.info('New Track Directive FormGroup: ', formGroup);
  }
}
