import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/nabvar/navbar/navbar.component';
import { HistoriaComponent } from './componentes/shared/nabvar/historia/historia.component';
import { PokedexPokemonsComponent } from './componentes/shared/nabvar/pokedex-pokemons/pokedex-pokemons.component';
import { BuscadorComponent } from './componentes/shared/nabvar/buscador/buscador.component';
import { PokemonComponent } from './componentes/shared/nabvar/pokemon/pokemon.component';
import { PokemonHtmlComunComponent } from './componentes/shared/nabvar/pokemon-html-comun/pokemon-html-comun.component';

//rutas
import { ROUTES } from "./pokemon.routes";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//servicios 
import { PokemonService } from "./pokemon.services";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoriaComponent,
    PokedexPokemonsComponent,
    BuscadorComponent,
    PokemonComponent,
    PokemonHtmlComunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash:true })
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
