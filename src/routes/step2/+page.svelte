<script>
	import TruthTableData from '$lib/stores/TruthTableData.js';
	import MurdleOption from '$lib/classes/MurdleOption.js';
	import { onMount } from "svelte";

	onMount(async () => {
		processOptions();
	})

	function processOptions() {
		$TruthTableData.murdle_options = [];
		for(let category of $TruthTableData.murdle_categories.filter(e => e.active)) {
			category.options = [];
			const cleanOptions = category.rawOptions.trim();
			if(cleanOptions) {
				for(let option of category.rawOptions.trim().split('\n')) {
					let newOption = new MurdleOption({name: option, categoryID: category.id});
					$TruthTableData.murdle_options = [...$TruthTableData.murdle_options, newOption];
					category.options = [...category.options, newOption.id];
				}
			}
		}
	}
</script>

<h1>Step 2</h1>
