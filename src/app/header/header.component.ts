import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _dialog: MdDialog) { }

  ngOnInit() {
  }

  openSignIn() {
    let dialogRef = this._dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
