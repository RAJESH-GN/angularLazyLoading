import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SuccessComponent } from '../success/success.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'success',
        component: SuccessComponent,
      },
      /* {
        path: '',
        redirectTo: 'success',
        pathMatch: 'full',
      }, */
    ],
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LoginRouterModule {}
