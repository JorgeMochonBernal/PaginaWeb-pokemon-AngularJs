import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from "../../../../pokemon.services";

  @Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
  })

	export class BuscadorComponent implements OnInit {

	  pokemons:any[] = [];
    termino:string;

		constructor(private _activatedRoute:ActivatedRoute,
             		private _pokemonService:PokemonService,
                 private _router:Router ) { }

		ngOnInit() {
      this._activatedRoute.params.subscribe(params => {
        this.termino = params["termino"];
        this.pokemons = this._pokemonService.buscarPokemon(params["termino"]);
        console.log(this.pokemons);
      });
    }

    verPokemon(idx:number) {
      this._router.navigate(["/pokemon", idx]);
    }

   

}
