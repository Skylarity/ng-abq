export class Event {
	id: number;
	title: string = '';
	location: string = '';
	date: Date;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
