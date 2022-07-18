import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DirectiveTest';
  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      email: ['', Validators.email]
    });
  }

  public onClickA(): void {
    console.info('Component: Button A clicked');
  }

  public onClickB(): void {
    console.info('Component: Button B clicked');
  }

  public onClickC(): void {
    console.info('Component: Button C clicked');
  }
}
