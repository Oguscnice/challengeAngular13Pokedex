import { Component,EventEmitter, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexService } from 'src/app/shared/pokedex.service';
@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})
export class CreatePokemonComponent {
  create: Pokemon = {name: '', img: '', description:''};
  constructor(public pokedexService: PokedexService){}
  @Output()
  newPokemonToSend : EventEmitter<any> = new EventEmitter();
    onSubmit():void {
      this.pokedexService.pushNewPokemon(this.create)
    }
}
