import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  constructor() {}

  getFavorites(): any[] {
    return this.favorites;
  }

  addFavorite(pokemon: any): void {
    if (!this.isFavorite(pokemon)) {
      this.favorites.push(pokemon);
    }
  }

  removeFavorite(pokemon: any): void {
    this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name);
  }

  isFavorite(pokemon: any): boolean {
    return this.favorites.some(fav => fav.name === pokemon.name);
  }
}
