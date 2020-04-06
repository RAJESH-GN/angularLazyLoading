import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRouterModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { SuccessComponent } from '../success/success.component';

@NgModule({
  declarations: [LoginComponent, SuccessComponent],
  imports: [CommonModule, LoginRouterModule],
})
export class LoginModule {}
