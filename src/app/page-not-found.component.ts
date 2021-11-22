import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

    template: `
        <div class='center'>
            <h1 >la page 404 ! </h1>
            <img height=180 src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      
      <a routerLink="/pokemon/all" class="waves-effect waves-teal btn-flat">
         <button style="height:30px;">Retourner à l'accueil</button>
      </a>
        </div>`
})
export class PageNotFoundComponent {
    constructor(private route: ActivatedRoute, private router: Router) { }


    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

}