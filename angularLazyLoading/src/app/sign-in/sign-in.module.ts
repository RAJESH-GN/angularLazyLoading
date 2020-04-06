import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRouterModule } from './sign-in.routing.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRouterModule],
})
export class SignInModule {}
