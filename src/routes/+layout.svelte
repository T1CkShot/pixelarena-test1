<script lang="ts">
	import '../app.pcss';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import logo from '$lib/assets/logo.svg';
</script>

<div class="sticky top-0 flex w-full bg-background">
	<nav
		class="mb-4 flex w-full max-w-[1920px] items-center justify-between border-b border-border/40 px-4 py-2"
	>
		<img src={logo} alt="logo" class="w-10" />
		<div class="w-full max-w-sm">
			<Input placeholder="Search..." type="text" />
		</div>
		<div class="flex gap-4">
			<Button href="/login" variant="secondary">Login</Button>
			<Button href="/signup">Sign up</Button>
		</div>
	</nav>
</div>
<div class="flex w-full justify-center">
	<div class="flex w-full max-w-6xl flex-col items-center px-4">
		<div class="w-full"><slot /></div>
	</div>
</div>
