<script>
	import { User } from 'sveltefire';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<User let:user>
		<p>Hello {user.email}</p>
	</User>
</section>
