import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter';
import { RecipeCreation } from './recipe-creation/recipe-creation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RecipeList, RecipeFilterComponent, RecipeCreation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Yummer');
}
