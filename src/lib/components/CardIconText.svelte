<script lang="ts">
	import 'iconify-icon';

	export let textItem: string;
	export let icon: string;
</script>

<div class="flex items-center gap-1 text-muted-foreground">
	<iconify-icon {icon} />
	<p class="text-md font-semibold">
		{textItem}
	</p>
</div>
