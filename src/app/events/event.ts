export class Event {
	id: number;
	date: Date;
	location: string = '';
	topic: string = '';
	description: string = '';
	attending: boolean = false;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
