import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }
  search(term: string) {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      //delai 300ms entre chaque requête
      debounceTime(300),
      //ignorer la recherche en cous si c'est la même que la précedente
      distinctUntilChanged(),
      //retourne la liste des résultats
      switchMap((term: string) => this._pokemonService.searchPokemons(term))
    )
  }
  /*
  goDestroy(id: string) {

    let nid = +id;
    this._pokemonService.deletePokemon(id).subscribe(() => {
    });
  }
  */
  goDetail(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}