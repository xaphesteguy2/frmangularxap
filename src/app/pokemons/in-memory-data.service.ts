import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './mock-pokemon';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let pokemons = POKEMONS;
        return { pokemons };

    }
}

// GET ppi/pokemons
// GET api/pokemon/1
// PUT api/pokemon/1
// GET api/pokemons?name=^exp

