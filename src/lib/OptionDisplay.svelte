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
	.optionPicker {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	button {
		background: transparent;
		border: 2px solid #dbdbdb;
		border-radius: 5px;
		color: #dbdbdb;
		cursor: pointer;
		display: block;
		margin: 5px 0px;
		min-width: 50px;
		outline: none;
		padding: 5px;
		user-select: none;
		&.assigned {
			background-color: var(--appColorPrimary);
			border-color: var(--appColorPrimary);
			color: var(--appTextColor);
			font-weight: bold;
		}
		&.eliminated {
			color: var(--appAccentColor);
			border-color: var(--appAccentColor);
			text-decoration: line-through;
		}
	}
</style>
