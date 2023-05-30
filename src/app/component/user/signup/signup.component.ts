import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/Services/user.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  FormRecord,
  NgForm,
  Validators,
} from '@angular/forms';

function passwordMatcher(
  password: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = password.get('password');
  const confirmPassControl = password.get('confirmPassword');

  if (passwordControl?.pristine || confirmPassControl?.pristine) {
    return null;
  }
  if (passwordControl?.value == confirmPassControl?.value) {
    return null;
  }
  return { match: true };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: Iuser = {} as Iuser;
  userForm: FormGroup;
  passwordMassage: string = '';

  private validationMessage = {
    require: 'Please enter your password',
    password: 'Please enter valid password',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]],
        },
        {
          validator: passwordMatcher,
        }
      ),
      address: this.fb.array([]),
      mobile: this.fb.array([
        new FormGroup({
          mobile: new FormControl('', [
            Validators.required,
            Validators.pattern('[0-9]{10}'),
          ]),
        }),
      ]),
    });
  }

  ngOnInit(): void {
    this.addAddress();
  }
  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  setMassage(password: AbstractControl) {
    this.passwordMassage = '';
    if ((password.touched || password.dirty) && password.errors) {
      this.passwordMassage = this.validationMessage.require;
    }
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      street: ['', [Validators.required]],
    });
  }
  addAddress() {
    this.address.push(this.newAddress());
  }
  removeAddress(num: number) {
    this.address.removeAt(num);
    console.log(num);
  }

  get mobile(): FormArray {
    return this.userForm.get('mobile') as FormArray;
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }
  addMobile() {
    this.mobile.push(this.newMobile());
  }
  removeMobile(num: number) {
    this.mobile.removeAt(num);
    console.log(num);
  }

  id: number = 2;
  test() {
    console.log('sub test');
  }
  addUser() {
    console.log('Adding user');
  }
}
