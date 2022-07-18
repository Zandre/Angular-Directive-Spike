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

  public doStuff(formGroup: FormGroup): void {
    console.info(`New Track Directive: formGroup is ${formGroup.valid ? 'valid' : 'invalid'}`);

    if(formGroup.invalid) {
      this.reportFormValidationErrors(formGroup)
    }
  }

  private reportFormValidationErrors(formGroup: FormGroup): void {

    if(!formGroup) {
      return;
    }

    Object.keys(formGroup.controls).forEach(key => {
      let control = formGroup.get(key);
      if (control?.invalid) {
        console.error(`Control: ${key}, Error(s): ${JSON.stringify(control.errors)}, Current Value: ${control.value}`);
      }
    });
  }
}
