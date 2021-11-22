import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) { }
    // retourne tout les pokémons
    // getPokemons
    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    // retourne le pokémon avec l'identifiant passé
    // getPokemon avec id
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.get<Pokemon>(url);
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        }
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }


    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    deletePokemon(id: number): Observable<Pokemon[]> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.delete<Pokemon[]>(url);
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        if (!term.trim()) {
            return of([]); // retour vide
        }
        return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`);
    }
}
