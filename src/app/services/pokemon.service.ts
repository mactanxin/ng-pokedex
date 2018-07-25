import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx'


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
	private _resource = 'assets/data/pokemons.json'
	constructor(private _http:Http) { }

	getPokemons() {
		return this._http.get(this._resource).map(res=>res.json());
	}

	getPokemonByName(name){
		return Observable.create((observer) => {
			this.getPokemons().subscribe(pokemons=>{
				let pokemon = pokemons.filter((pokemon)=> pokemon.name === name);
			})
		})
	}
}
