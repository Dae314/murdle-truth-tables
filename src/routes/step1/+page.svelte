<script>
	import TruthTableData from '$lib/stores/TruthTableData.js';
	import { base } from '$app/paths';
</script>

<h1>Setup Murdle Options</h1>

<section class="categorySelect">
	<ul>
		{#each $TruthTableData.murdle_categories as category}
		<li>
			<input type="checkbox" class="categoryPickerOption" id="{category.name}" name="{category.name}" bind:checked={category.active} disabled={category.name === 'Suspects'}>
			<label class:selected={category.active} for="{category.name}">{category.name}</label>
		</li>
		{/each}
	</ul>
</section>

<section class="categoryOptions">
	<h2>Category Options</h2>
	<p class="note">List each option on a new line</p>

	{#each $TruthTableData.murdle_categories.filter(e => e.active) as category}
	<h3>{category.name}</h3>
	<textarea bind:value={category.rawOptions}></textarea>
	{/each}
</section>

<section class="navigation">
	<a href="{base}/step2">Next</a>
</section>

<style lang="scss">
	.categorySelect {
		ul {
			display: flex;
			list-style-type: none;
			margin: 0;
			padding: 0;
			li {
				margin: 0px 10px;
				user-select: none;
				width: 70px;
				&:first-child {
					margin-left: 0;
				}
			}
			.categoryPickerOption {
				display: none;
				&:disabled+label {
					cursor: not-allowed;
				}
			}
			label {
				cursor: pointer;
				&.selected {
					color: var(--appColorPrimary);
					font-weight: bold;
				}
			}
		}
	}
	.categoryOptions {
		h2 {
			margin-bottom: 0;
		}
		.note {
			margin: 0;
			margin-bottom: 30px;
			font-size: 0.8rem;
		}
		textarea {
			height: 100px;
			width: 200px;
			margin-bottom: 10px;
		}
	}
	.categoryOptions {
		h3 {
			margin-bottom: 5px;
		}
		textarea {
			color: var(--appTextColor);
			background-color: var(--appBGColor);
			border: 2px solid var(--appColorPrimary);
			border-radius: 3px;
			&:focus {
				outline: 1px solid var(--appColorPrimary);
			}
		}
	}
	.navigation {
		margin-top: 10px;
		a {
			background: var(--appColorPrimary);
			border-radius: 5px;
			text-decoration: none;
			color: var(--appTextColor);
			font-weight: bold;
			padding: 5px;
		}
	}
</style>
