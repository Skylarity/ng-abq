import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any[] = [
  	{date: new Date(2017, 2), location: "Tractor Brewing @ Wells Park", attending: false},
  	{date: new Date(2017, 3), location: "Tractor Brewing @ Wells Park", attending: true},
  	{date: new Date(2017, 4), location: "Tractor Brewing @ Wells Park", attending: false},
  	{date: new Date(2017, 5), location: "Tractor Brewing @ Wells Park", attending: false},
  	{date: new Date(2017, 6), location: "Tractor Brewing @ Wells Park", attending: false}
  ];

  constructor(private _snackbar: MdSnackBar) { }

  ngOnInit() {
  }

  attendEvent(i) {
  	this.events[i].attending = !this.events[i].attending;
    this._snackbar.open(this.events[i].attending ? 'See you then!' : 'See you another time!', 'Okay');
  }

}
