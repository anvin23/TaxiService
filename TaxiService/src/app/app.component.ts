import { Component, OnInit, Inject, Input, COMPILER_OPTIONS } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { UserAddingFormComponent } from './user-adding-form/user-adding-form.component';

import { OperatorAddingFormComponent } from './operator-adding-form/operator-adding-form.component';
import { DriverAddingFormComponent } from './driver-adding-form/driver-adding-form.component';

export interface DialogData {
  
  first_name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   first_name: string;


  constructor(public dialog: MatDialog) { }

  openOperatorAdding(): void {

    const dialogRef = this.dialog.open(OperatorAddingFormComponent,{
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ');
      // this.first_name = result;
    });

    
  } 
  /* openDriverAdding(): void {
    const dia = this.dialog.open(DriverAddingFormComponent, {
      data: { first_name: this.first_name }
    });
    dia.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + this.first_name);
      this.first_name = result;
    });
  } */
}

