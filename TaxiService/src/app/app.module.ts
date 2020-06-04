import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { UserAddingFormComponent } from './user-adding-form/user-adding-form.component';
import { OperatorAddingFormComponent } from './operator-adding-form/operator-adding-form.component';
import { DriverAddingFormComponent } from './driver-adding-form/driver-adding-form.component';


@NgModule({
   declarations: [
      AppComponent,
      SignupDialogComponent,
      SignInDialogComponent,
      MainFooterComponent,
      UserAddingFormComponent,
      OperatorAddingFormComponent,
      DriverAddingFormComponent,
   ],
   entryComponents: [
      SignupDialogComponent,
      SignInDialogComponent,
      UserAddingFormComponent,
      DriverAddingFormComponent,
      OperatorAddingFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
