import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';


@NgModule({
   declarations: [
      AppComponent,
      SignupDialogComponent,
      SignInDialogComponent,
   ],
   entryComponents: [
      SignupDialogComponent,
      SignInDialogComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
