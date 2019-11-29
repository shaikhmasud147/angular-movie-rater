import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

const routes: Router = [
	{path: 'auth', component: AuthComponent}
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  export: [RouterModule],
})
export class AuthModule { }
