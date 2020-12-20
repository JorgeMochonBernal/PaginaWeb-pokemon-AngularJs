import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../../../pokemon.services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokedex-pokemons',
  templateUrl: './pokedex-pokemons.component.html',
  styleUrls: ['./pokedex-pokemons.component.css']
})

	export class PokedexPokemonsComponent implements OnInit {

		pokemons:any[] = [];
		
		constructor(private _pokemonService:PokemonService,
					private _router:Router) {}

		ngOnInit(): void {
			this.pokemons = this._pokemonService.getPokemons();
		}

		verPokemon(idx:number) {
			this._router.navigate(["/pokemon", idx]);
		}
	}
