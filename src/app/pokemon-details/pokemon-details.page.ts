import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemonName: string;
  pokemonDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.pokemonName = '';
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.pokemonName = name;
        this.loadPokemonDetails();
      }
    });
  }
  

  loadPokemonDetails() {
    this.apiService.getPokemonDetails(this.pokemonName).subscribe(
      (data: any) => {
        this.pokemonDetails = data;
      },
      error => {
        console.error('Error loading Pokémon details:', error);
      }
    );
  }
}
