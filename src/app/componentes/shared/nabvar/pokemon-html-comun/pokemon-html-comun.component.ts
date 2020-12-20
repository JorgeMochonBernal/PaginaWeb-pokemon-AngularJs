import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { PokemonService } from "../../../../pokemon.services";
import { Router } from "@angular/router";


	@Component({
	  selector: 'app-pokemon-html-comun',
	  templateUrl: './pokemon-html-comun.component.html',
	  styleUrls: ['./pokemon-html-comun.component.css']
	})
	
	export class PokemonHtmlComunComponent implements OnInit {

		@Input() pokemon:any = {};
		@Input() index:number;



		constructor(private _router:Router,) { 

		}

		ngOnInit(): void {
		}

		verPokemon(idx:number) {
			this._router.navigate(["/pokemon", this.index]);
		}

		
}
		

	
