<script>
	export let options = [];
</script>

<div class="optionPicker">
	{#each options as option}
		<button type="button" on:click={() => { option.toggleState(); option.state = option.state; }} class={option.stateStr}>
			<span>
				{option.name}
			</span>
		</button>
	{/each}
</div>

<style lang="scss">
	button {
		padding: 5px;
		cursor: pointer;
		user-select: none;
		background: transparent;
		outline: none;
		border: 2px solid var(--appColorPrimary);
		border-radius: 5px;
		&.unknown {
			color: gray;
		}
		&.assigned {
			font-weight: bold;
		}
		&.eliminated {
			text-decoration: line-through;
		}
	}
</style>
