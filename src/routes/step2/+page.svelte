<script>
	import TruthTableData from '$lib/stores/TruthTableData.js';
	import TruthTable from '$lib/classes/TruthTable.js';
	import OptionDisplay from '$lib/OptionDisplay.svelte';
	import { base } from '$app/paths';
	import { onMount } from "svelte";

	onMount(async () => {
		processOptions();
		createTables();
	});

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
	}
</script>

<h1>Truth Tables</h1>

<section class="navigation">
	<a href="{base}/step1">Prev</a>
</section>

<section class="tablesDisplay">
	{#each $TruthTableData.truth_tables as table}
	<table>
		<tr>
			{#each table.headRow as title}
			<th>{title}</th>
			{/each}
		</tr>
		{#each table.body as row}
			<tr>
				{#each row as cell}
					<td>
						{#if cell.type === 'basic'}
							<span class:key={cell.key}>{cell.data}</span>
						{:else if cell.type === 'optionList'}
							<OptionDisplay options={cell.data} />
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
	{/each}
</section>

<style lang="scss">
	.navigation {
		margin-bottom: 20px;
		a {
			background: var(--appColorPrimary);
			border-radius: 5px;
			text-decoration: none;
			color: var(--appTextColor);
			font-weight: bold;
			padding: 5px;
		}
	}
	.key {
		color: var(--appColorPrimary);
		font-weight: bold;
	}
	.tablesDisplay {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
		grid-gap: 5px;
	}
	table, th, td {
		border: 1px solid white;
		border-collapse: collapse;
	}
	th, td {
		padding: 5px;
	}
	td {
		text-align: center;
	}
</style>
