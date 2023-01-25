import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemonDetail: any;

  constructor(public pokemonsListService: PokedexService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonsListService.sendList();
  }

  receiveDetailsFromList(event: any) {
    this.pokemonDetail = event;
  }
}
