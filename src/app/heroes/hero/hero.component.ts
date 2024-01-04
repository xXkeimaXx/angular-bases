import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public nameReal: string = 'Tony';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.nameReal = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 25;
  }
  resetForm(): void {
    this.name = 'Ironman';
    this.nameReal = 'Tony';
    this.age = 45;
  }
}
