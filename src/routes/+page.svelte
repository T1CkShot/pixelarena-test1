<script lang="ts">
	import { games } from '$lib/db/games';
	import { tournaments, type Tournament } from '$lib/db/tournaments';
	import * as Tabs from '$lib/components/ui/tabs';
	import TourneyCard from '$lib/components/TourneyCard.svelte';

	const filterTournamets = (tournaments: Tournament[], game: string) => {
		return tournaments.filter((t) => t.gameSlug == game).slice(0, 3);
	};
</script>

<div class="mt-6 flex justify-between">
	<div class="flex w-3/5 flex-col justify-center">
		<h1 class="mb-4 text-5xl font-bold">Pixel Arena</h1>
		<p class="w-4/5 text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae felis quis nisi
			consectetur vulputate. Integer eget eros eu lectus pretium bibendum. Nulla facilisi. Proin ut
			purus non augue hendrerit dapibus. Phasellus vel metus id ipsum viverra accumsan. Ut euismod
		</p>
	</div>

	<div class="w-[450px]">
		<img class="rounded-md object-cover" src="https://placehold.co/1280x1080" alt="Header" />
	</div>
</div>

<h1 class="mb-6 mt-12 text-4xl font-bold">Browse Games</h1>

<div class="flex justify-between px-4">
	{#each games as game}
		<div>
			<a href={`/tournamets/${game.slug}`}>
				<img
					src={game.cardImage}
					alt={game.title}
					class="box-border w-[220px] rounded-lg border-2 border-background hover:border-primary"
				/>
				<p class="text-lg font-semibold">{game.title}</p>
			</a>
		</div>
	{/each}
</div>

<h1 class="mb-6 mt-12 text-4xl font-bold">Tournaments</h1>

<Tabs.Root value={games[0].slug} class="w-full">
	<Tabs.List class="mb-4">
		{#each games as game}
			<Tabs.Trigger value={game.slug}>{game.title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each games as game}
		<Tabs.Content value={game.slug}>
			<div class="flex justify-center gap-6">
				{#each filterTournamets(tournaments, game.slug) as tournament}
					<TourneyCard content={tournament} />
				{/each}
			</div>
			<div class="mt-4 flex w-full justify-center">
				<a
					class="font-semibold text-muted-foreground underline hover:brightness-125"
					href={`/tournaments/${game.slug}`}>View More</a
				>
			</div>
		</Tabs.Content>
	{/each}
</Tabs.Root>
