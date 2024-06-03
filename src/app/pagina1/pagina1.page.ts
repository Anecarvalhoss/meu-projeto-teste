import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/pokeapi.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  pokemons: any[] = [];
  limit: number = 6;
  offset: number = 0;

  constructor(private pokeApiService: PokeApiService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeApiService.getPokemons(this.limit, this.offset).subscribe(
      response => {
        const requests = response.results.map((pokemon: any) =>
          this.pokeApiService.getPokemonDetails(pokemon.url).toPromise()
        );

        Promise.all(requests).then((results: any[]) => {
          this.pokemons = results.map(pokemon => ({
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            description: pokemon.abilities.map((ability: any) => ability.ability.name).join(', ')
          }));
        });
      },
      error => {
        console.error('Error loading Pokémons:', error);
      }
    );
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  previousPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  toggleFavorite(pokemon: any) {
    if (this.isFavorite(pokemon)) {
      this.favoritesService.removeFavorite(pokemon);
    } else {
      this.favoritesService.addFavorite(pokemon);
    }
  }

  isFavorite(pokemon: any): boolean {
    return this.favoritesService.isFavorite(pokemon);
  }
}



