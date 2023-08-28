<script>
	import TruthTableData from '$lib/stores/TruthTableData.js';
	import TruthTable from '$lib/classes/TruthTable.js';
	import { onMount } from "svelte";

	onMount(async () => {
		processOptions();
		createTables();
	})

	function processOptions() {
		for(let category of $TruthTableData.murdle_categories.filter(e => e.active)) {
			category.options = [];
			const cleanOptions = category.rawOptions.trim();
			if(cleanOptions) category.options = cleanOptions.split('\n');
		}
	}

	function createTables() {
		$TruthTableData.truth_tables = [];
		// always key off suspects
		const suspects = $TruthTableData.murdle_categories.findIndex(e => e.name === 'Suspects');
		for(let option of $TruthTableData.murdle_categories[suspects].options) {
			let newTable = new TruthTable({
				categories: $TruthTableData.murdle_categories,
				keyCategory: suspects,
				keyOption: $TruthTableData.murdle_categories[suspects].options.findIndex(e => e === option)
			});
			$TruthTableData.truth_tables = [...$TruthTableData.truth_tables, newTable];
		}
		console.log($TruthTableData.truth_tables);
	}
</script>

<h1>Step 2</h1>
