import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  // pokemonDetail: any;

  @Input() pokemonReceive:any
}
