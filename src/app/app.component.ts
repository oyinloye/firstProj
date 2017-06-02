import { Component } from '@angular/core';

const HEROES: Hero[] = [
      { id: 11, name: 'David'},
      { id: 12, name: 'Eric'},
      { id: 13, name: 'Chris'},
      { id: 14, name: 'Daley'},
      { id: 15, name: 'Tony'},
      { id: 16, name: 'Paul'},
      { id: 17, name: 'Ander'},
      { id: 18, name: 'Marcus'},
      { id: 19, name: 'Antoine'},
      { id: 20, name: 'Zlatan'}

    ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
  };
export class Hero {
  id: number;
  name: string;
}
