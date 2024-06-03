import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(pokemon: any) {
    this.favoritesService.removeFavorite(pokemon);
    this.favorites = this.favoritesService.getFavorites();
  }
}

