import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { pokemons } from './pokemons-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  pokemonsList: Pokemon[] = pokemons;

  sendList(): Pokemon[] {
    return this.pokemonsList;
  }
  pushNewPokemon(pokemon:Pokemon){
    this.pokemonsList.push(pokemon);
}
}
