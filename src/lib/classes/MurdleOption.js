import { error } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export default class MurdleOption {
	#validStates = [
		'unknown',
		'assigned',
		'eliminated',
	];
	
	constructor(config) {
		this.id = 'id' in config ? config.id : uuidv4();
		this.name = 'name' in config ? config.name : '';
		this.categoryID = 'categoryID' in config ? config.categoryID : 0;
		this.key = 'key' in config ? config.key : false;
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
		this.state = (this.state + 1) % this.#validStates.length;
	}

	get stateStr() {
		return this.#validStates[this.state];
	}
}
