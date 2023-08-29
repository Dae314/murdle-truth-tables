
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
						this.#tableOptions.push({
							name: category.options[i],
							categoryID: category.id,
							key: true,
							state: 0,
						});
					} else {
						this.#tableOptions.push({
							name: category.options[i],
							categoryID: category.id,
							key: false,
							state: 0,
						});
					}
				}
			}
			for(let option of category.options) {
				this.#tableOptions.push({
					name: option,
					categoryID: category.id,
					key: false,
					state: 0,
				});
			}
		}
		this.headRow = this.categories.map(e => e.name);
		this.body = [];
		for(let bodyOption of this.categories[this.keyCategory].options) {
			let row = [];
			row.push({data: bodyOption, type: 'basic', key: this.categories[this.keyCategory].options.indexOf(bodyOption) === this.keyOption });
			for(let category of this.categories.filter((e, i) => i !== this.keyCategory)) {
				row.push({data: this.#tableOptions.filter(e => e.categoryID === category.id).map(e => JSON.parse(JSON.stringify(e))), type: 'optionList'});
			}
			this.body.push(row);
		}
	}
}
