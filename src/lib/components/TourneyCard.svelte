<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Tournament } from '$lib/db/tournaments';
	import CardIconText from './CardIconText.svelte';
	export let content: Tournament;
</script>

<Card.Root class="w-[350px]">
	<img class="h-[200px] rounded-t-md object-cover" src={content.coverImage} alt="Cover" />
	<Card.Header>
		<Card.Title class="w-68 h-5 truncate font-bold">{content.title}</Card.Title>
		<Card.Description>
			<CardIconText
				textItem={content.entryFee > 0 ? content.entryFee + ' ' + content.entryFeeFormat : 'Free'}
				icon="mdi:ticket"
			/>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex justify-between">
			{#if content.prize}
				<div class="text-md font-semibold text-muted-foreground">
					<CardIconText textItem={`${content.prize} ${content.prizeFormat}`} icon="mdi:trophy" />
				</div>
			{/if}
			<CardIconText textItem={content.format} icon="mdi:bracket" />
			<CardIconText
				textItem={`${content.currentParticipant}/${content.maxParticipant}`}
				icon="mdi:account-group"
			/>
		</div>
	</Card.Content>
	<Card.Footer class="flex flex-col">
		<hr class="w-full border-border" />
		<div class="mt-2 flex w-full justify-between">
			<CardIconText icon="mdi:calendar" textItem={content.startDate} />
			<CardIconText textItem={content.game} icon="mdi:gamepad-variant" />
		</div>
	</Card.Footer>
</Card.Root>
