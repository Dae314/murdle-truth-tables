import { writable } from 'svelte/store';

const TruthTableData = writable({
	murdle_categories: [
		{id: 0, name: 'Suspects', active: true, options: [], rawOptions: ''},
		{id: 1, name: 'Locations', active: true, options: [], rawOptions: ''},
		{id: 2, name: 'Weapons', active: true, options: [], rawOptions: ''},
		{id: 3, name: 'Motives', active: false, options: [], rawOptions: ''},
	],
});

export default TruthTableData;
