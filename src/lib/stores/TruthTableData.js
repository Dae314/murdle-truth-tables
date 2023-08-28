import { writable } from 'svelte/store';
import MurdleCategory from '$lib/classes/MurdleCategory';

const TruthTableData = writable({
	murdle_categories: [
		new MurdleCategory({id: 0, name: 'Suspects', active: true}),
		new MurdleCategory({id: 1, name: 'Locations', active: true}),
		new MurdleCategory({id: 2, name: 'Weapons', active: true}),
		new MurdleCategory({id: 3, name: 'Motives', active: false}),
	],
});

export default TruthTableData;
