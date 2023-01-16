<script lang="ts">
	import { auth } from '$lib/firebase';
	import { createUserWithEmailAndPassword } from 'firebase/auth';

	let email = '';
	let password = '';

	let error = '';

	let success = false;

	async function submit(e: Event) {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(auth, email, password);

			success = true;
		} catch (err) {
			console.log(err);
			error = err as string;
		}
	}
</script>

<form on:submit={submit}>
	{#if success}
		<p class="text-green-500">Successfully registered!</p>
	{/if}
	{#if error}
		<p class="text-red-500">{error}</p>
	{/if}
	<input placeholder="E-Mail" bind:value={email} name="email" type="text" />
	<input placeholder="Password" bind:value={password} name="password" type="text" />

	<button type="submit">Register</button>

	<p>For login please use our login <a href="/login">here</a>.</p>
</form>
