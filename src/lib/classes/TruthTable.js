import MurdleOption from '$lib/classes/MurdleOption.js';

export default class TruthTable {
	#tableOptions = [];

	constructor(config) {
		this.categories = 'categories' in config ? [...config.categories].filter(e => e.active) : [];
		this.keyCategory = 'keyCategory' in config ? config.keyCategory : 0;
		this.keyOption = 'keyOption' in config ? config.keyOption : 0;
		if(this.categories[this.keyCategory]) this.categories[this.keyCategory].key = true;
		for(let category of this.categories) {
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
		this.headRow = this.categories.map(e => e.name);
		this.body = [];
		for(let bodyOption of this.categories[this.keyCategory].options) {
			let row = [];
			row.push({data: bodyOption, type: 'basic'});
			for(let category of this.categories.filter((e, i) => i !== this.keyCategory)) {
				row.push({data: this.#tableOptions.filter(e => e.categoryID === category.id), type: 'optionList'});
			}
			this.body.push(row);
		}
	}
}