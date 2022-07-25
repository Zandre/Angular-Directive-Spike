import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: ' button([button-track])'
})

export class NewButtonTrackDirective {

  @Input()
  formGroup!: FormGroup;

  constructor(private elementRef: ElementRef) {
    console.log('[constructor] New Track Directive');
    console.info('ElementRef: ', elementRef);
  }

  @HostListener('click')
  public onClick(): void {

    // if(this.formGroup) {
    //   return;
    // }

    console.info(`New Track Directive: formGroup is ${this.formGroup?.valid ? 'valid' : 'invalid'}`);

    if(this.formGroup?.invalid) {
      this.reportFormValidationErrors(this.formGroup)
    }
  }

  private reportFormValidationErrors(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      let control = formGroup.get(key);
      if (control?.invalid) {
        console.error(`Control: ${key}, Error(s): ${JSON.stringify(control.errors)}, Current Value: ${control.value}`);
      }
    });
  }
}
