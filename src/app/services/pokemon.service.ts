import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Observable, Subject } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { pokemon_json } from './pokemons';

@Injectable()
export class PokemonService {
	private _resource = '/assets/data/pokemons.json'
	constructor(private _http:HttpClient) { }

	getPokemons() {
		return this._http.get(this._resource);
	}

	getPokemonByName(name){
		return Observable.create((observer) => {
			this.getPokemons().subscribe(pokemons=>{
				let pokemon = pokemons.filter((pokemon)=> pokemon.name === name);
			})
		})
	}
}
