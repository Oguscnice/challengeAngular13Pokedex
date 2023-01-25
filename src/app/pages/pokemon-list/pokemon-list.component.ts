import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {

  @Input() sendListFromPageToList: Pokemon[]=[];


  @Output()
  sendSelectedPokemonFromListToDetail: EventEmitter<any> = new EventEmitter();
  selectedPokemon(pokemon:any): void {
    this.sendSelectedPokemonFromListToDetail.emit(pokemon)
  }
}
