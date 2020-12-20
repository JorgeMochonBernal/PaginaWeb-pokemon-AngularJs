import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../../../pokemon.services";
import { ActivatedRoute, Router } from '@angular/router';

	@Component({
	  selector: 'app-pokemon',
	  templateUrl: './pokemon.component.html',
	  styleUrls: ['./pokemon.component.css']
	})

	export class PokemonComponent implements OnInit {

		pokemon:any = {};

		constructor(private _activatedRoute: ActivatedRoute,
					private _pokemonService:PokemonService,
					private _router:Router) { 

			 this._activatedRoute.params.subscribe( params =>{
		        this.pokemon = this._pokemonService.getPokemon(params['idx'] );
   		 });
		}

		ngOnInit(): void {
		}

		volverPokedex() {
			console.log("si");
			this._router.navigate(["pokemons"]);
		}

	}
