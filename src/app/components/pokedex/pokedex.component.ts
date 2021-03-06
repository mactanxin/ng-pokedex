import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers: [PokemonService],
})
export class PokedexComponent implements OnInit {
  
  pokemons;
  pokemon_type: string;
  constructor(private _pokemonService: PokemonService) {}

  ngOnInit() {
  	this._pokemonService.getPokemons().subscribe( pokemons=>{
  		this.pokemons = pokemons;
  		console.log(this.pokemons);
  	});
  	this._pokemonService.getPokemonByName("Bulbasaur").subscribe( pokemon => {
  		console.log(pokemon);
  	});

  	this._pokemonService.getPokemonByType("Grass").subscribe( pokemons => {
  		console.log(pokemons)
  	})
  }

}
