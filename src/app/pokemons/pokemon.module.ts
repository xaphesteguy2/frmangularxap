import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "../auth-guard.service";
import { BoarderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        BoarderCardDirective,
        EditPokemonComponent,
        SearchPokemonComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    providers: [
        PokemonService,
        AuthGuardService
    ]

})
export class PokemonsModule { }