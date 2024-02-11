<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Tournament } from '$lib/db/tournaments';

	export let content: Tournament;
</script>

<Card.Root class="w-[400px]">
	<img class="h-[200px] rounded-t-md object-cover" src={content.coverImage} alt="Cover" />
	<Card.Header>
		<Card.Title class="w-68 h-5 truncate font-bold">{content.title}</Card.Title>
		<Card.Description>
			Entry Fee: {content.entryFee > 0 ? `${content.entryFee} ${content.entryFeeFormat}` : 'Free'}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex justify-between">
			{#if content.prize}
				<p class="text-md font-semibold text-muted-foreground">
					{content.prize}
					{content.prizeFormat}
				</p>
			{/if}
			<p class="text-md font-semibold text-muted-foreground">
				{content.format}
			</p>
			<p class="text-md font-semibold text-muted-foreground">
				{content.currentParticipant}/{content.maxParticipant}
			</p>
		</div>
	</Card.Content>
	<Card.Footer class="flex flex-col">
		<hr class="w-full border-border" />
		<div class="mt-2 flex w-full justify-between">
			<p class="text-md font-semibold text-muted-foreground">
				{content.startDate}
			</p>
			<p class="text-md font-semibold text-muted-foreground">
				{content.game}
			</p>
		</div>
	</Card.Footer>
</Card.Root>
