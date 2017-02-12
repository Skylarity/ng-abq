import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Status } from "./classes/status";

@Injectable()
export abstract class BaseService {
	constructor(protected http: Http) {}

	protected extractData(response: Response) : any {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}
		let json = response.json();
		if(json.status !== 200) {
			throw(new Error("Bad API status: " + json.status));
		}
		return(json.data);
	}

	protected extractMessage(response: Response) : Status {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}
		let json = response.json();

		let status = new Status({code: json.status, message: json.message});
		return(status);
	}

	protected handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}
