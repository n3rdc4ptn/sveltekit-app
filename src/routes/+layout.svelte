<script>
	import './styles.css';

	import { FirebaseApp, userStore } from 'sveltefire';
	import { db, auth } from '$lib/firebase';
	import { page } from '$app/stores';

	const user = userStore(auth);

	const unauthenticatedPages = ['/login', '/register'];

	$: allowedToVisit =
		($user && $user.uid) || unauthenticatedPages.includes($page.route.id ?? 'not_included');
</script>

<FirebaseApp firestore={db} {auth}>
	<div class="app">
		<main class="container mx-auto">
			{#if allowedToVisit}
				<slot />
			{:else}
				<p>Not logged in, please login at <a href="/login">Login</a></p>
			{/if}
		</main>
		<footer>
			<p>&copy; Snap Cam</p>
		</footer>
	</div>
</FirebaseApp>
