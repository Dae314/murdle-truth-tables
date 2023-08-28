import { error } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export default class MurdleOption {
	#validStates = [
		{id: 0, name: 'unknown'},
		{id: 1, name: 'assigned'},
		{id: 2, name: 'eliminated'},
	];
	
	constructor(config) {
		this.id = 'id' in config ? config.id : uuidv4();
		this.name = 'name' in config ? config.name : '';
		if('state' in config) {
			if(config.state >= 0 && config.state < this.#validStates.length) {
				this.state = config.state;
			} else {
				throw error(500, {
					message: 'Invalid MurdleOption state specified.'
				});
			}
		} else {
			this.state = 0;
		}
	}

	toggleState() {
		this.state = ++this.state % this.#validStates.length;
	}

	get state() {
		return this.#validStates[this.state];
	}
}
