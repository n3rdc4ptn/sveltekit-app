<script lang="ts">
	import { auth } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let email = '';
	let password = '';

	let error = '';

	async function login(e: Event) {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password);

			redirect(307, '/');
		} catch (err) {
			console.log(err);
			error = err as string;
		}
	}
</script>

<form on:submit={login}>
	{#if error}
		<p class="text-red-500">{error}</p>
	{/if}
	<input bind:value={email} name="email" placeholder="E-Mail" type="text" />
	<input bind:value={password} name="password" placeholder="Password" type="password" />

	<button type="submit">Login</button>

	<p>For registration please use our registration <a href="/register">here</a>.</p>
</form>
