import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})

export class AppComponent implements OnInit {
  @Input() hero: Hero;
  title = 'Tour of Heroes';
  heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void{
  this.heroes = this.heroService.getHeroes()
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}

