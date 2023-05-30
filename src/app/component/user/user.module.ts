import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-profile', pathMatch: 'full' },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    title: 'Edit Profile',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'view-profile',
    component: ViewProfileComponent,
    title: 'View Profile',
  },
];

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
