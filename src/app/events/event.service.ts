import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BaseService } from "../base.service";
import { Event } from "./event";
import { Status } from "../classes/status";

@Injectable()
export class EventService extends BaseService {

  constructor(protected http: Http) {
  	super(http);
  }

  private eventUrl = "./api/event/";

  getEvent(id: number) : Observable<Event> {
  	return(this.http.get(this.eventUrl + id)
  		.map(this.extractData)
  		.catch(this.handleError))
  }

  getAllEvents() : Observable<Event[]> {
  	return(this.http.get(this.eventUrl)
  		.map(this.extractData)
  		.catch(this.handleError))
  }

  createEvent(event: Event) : Observable<Status> {
  	return(this.http.post(this.eventUrl, event)
  		.map(this.extractMessage)
  		.catch(this.handleError))
  }

  editEvent(event: Event) : Observable<Status> {
  	return(this.http.put(this.eventUrl + event.id, event)
  		.map(this.extractMessage)
  		.catch(this.handleError))
  }

  deleteEvent(id: number) : Observable<Status> {
  	return(this.http.delete(this.eventUrl + id)
  		.map(this.extractMessage)
  		.catch(this.handleError))
  }
}
