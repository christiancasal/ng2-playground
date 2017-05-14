import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [],
})

export class HeroesComponent implements OnInit {
  @Input() hero: Hero;
  heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void{
    this.heroService.getHeroes().then(data => this.heroes = data)
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}

