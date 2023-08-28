import { v4 as uuidv4 } from 'uuid';

export default class MurdleCategory {
	constructor(config) {
		this.id = 'id' in config ? config.id : uuidv4();
		this.name = 'name' in config ? config.name : '';
		this.active = 'active' in config ? config.active : false;
		this.options = 'options' in config ? config.options : [];
		this.rawOptions = 'rawOptions' in config ? config.options : '';
	}
}
