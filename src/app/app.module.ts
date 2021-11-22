import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { InMemoryDataService } from "./pokemons/in-memory-data.service";
import { PokemonRoutingModule } from "./pokemons/pokemon-routing.module";
import { PokemonsModule } from "./pokemons/pokemon.module";
import { LoginComponent } from './login/login/login.component';
import { LoginRoutingModule } from "./login/login-routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PokemonsModule,
    PokemonRoutingModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

