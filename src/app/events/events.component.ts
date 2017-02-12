import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Event } from "./event";
import { EventService } from "./event.service";
import { Status } from "../classes/status";



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = [
  	new Event({date: new Date(2017, 2, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
  	new Event({date: new Date(2017, 3, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: true}),
  	new Event({date: new Date(2017, 4, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
  	new Event({date: new Date(2017, 5, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
  	new Event({date: new Date(2017, 6, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
    new Event({date: new Date(2017, 7, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
    new Event({date: new Date(2017, 8, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
    new Event({date: new Date(2017, 9, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false}),
    new Event({date: new Date(2017, 10, Math.floor(Math.random() * 7)), location: "Tractor Brewing @ Wells Park", topic: "Learning Angular", description: "This is a description of an event. It has a lot of words in it.", attending: false})
  ];

  constructor(private eventService: EventService, private _snackbar: MdSnackBar) { }

  ngOnInit() {
  }

  attendEvent(i) {
  	this.events[i].attending = !this.events[i].attending;
    this._snackbar.open(this.events[i].attending ? 'See you then!' : 'See you another time!', 'Okay');
  }

  loadEvents(): void {
    this.eventService.getAllEvents()
      .subscribe(events => this.events = events);
  }

}
