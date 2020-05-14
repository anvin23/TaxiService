import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "TaxiService";

  first_name: string;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '450px',
      data: { first_name: "this.first_name" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.first_name);
    });

  }
  ngOnInit() {
    console.log(this.first_name);

  }
  openDialog1() {
    this.dialog.open(SignInDialogComponent, {
      width: '450px'

    })


  }

}
