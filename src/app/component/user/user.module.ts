import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view-profile', pathMatch: 'full' },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    title: 'Edit Profile',
  },
  { path: 'login', component: EditProfileComponent, title: 'Login' },
  {
    path: 'view-profile',
    component: EditProfileComponent,
    title: 'View Profile',
  },
];

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
