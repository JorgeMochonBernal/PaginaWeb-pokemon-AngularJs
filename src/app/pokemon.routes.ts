import { Routes } from "@angular/router";
import { HistoriaComponent } from "./componentes/shared/nabvar/historia/historia.component";
import { PokedexPokemonsComponent } from "./componentes/shared/nabvar/pokedex-pokemons/pokedex-pokemons.component";
import { PokemonComponent } from "./componentes/shared/nabvar/pokemon/pokemon.component";
import { BuscadorComponent } from "./componentes/shared/nabvar/buscador/buscador.component";

	export const ROUTES:Routes = [
		{ path:"historia", component: HistoriaComponent },
		{ path:"pokemons", component: PokedexPokemonsComponent },
		{ path:"pokemon/:idx", component: PokemonComponent },
		{ path:"buscar/:termino", component: BuscadorComponent },
		{ path: "**", pathMatch: "full", redirectTo:"historia"}
	];