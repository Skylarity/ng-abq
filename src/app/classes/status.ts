export class Status {
	code: number;
	message: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
