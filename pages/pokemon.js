function Pokemon({ pokemon }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			Welcome, {pokemon?.name}!
			<img class="profile-pic" src={pokemon?.sprites.front_default} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		},
	};
}

export default Pokemon;
