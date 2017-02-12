import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(@Optional() public dialogRef: MdDialogRef<SignInComponent>) { }

  ngOnInit() {
  }

}
