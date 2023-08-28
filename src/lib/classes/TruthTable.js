import MurdleOption from '$lib/classes/MurdleOption.js';

export default class TruthTable {
	#tableOptions = [];

	constructor(config) {
		this.categories = 'categories' in config ? [...config.categories] : [];
		this.keyCategory = 'keyCategory' in config ? config.keyCategory : 0;
		this.keyOption = 'keyOption' in config ? config.keyOption : 0;
		if(this.categories[this.keyCategory]) this.categories[this.keyCategory].key = true;
		for(let category of this.categories) {
			if(!category.active) break;
			if(category.key) {
				for(let i = 0; i < category.options.length; i++) {
					if(i === this.keyOption) {
						this.#tableOptions.push(new MurdleOption({name: category.options[i], categoryID: category.id, key: true}));
					} else {
						this.#tableOptions.push(new MurdleOption({name: category.options[i], categoryID: category.id}));
					}
				}
			}
			for(let option of category.options) {
				this.#tableOptions.push(new MurdleOption({name: option, categoryID: category.id}))
			}
		}
	}
}
