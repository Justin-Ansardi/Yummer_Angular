import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes/recipe-service';
import { Recipe } from '../recipes/recipe';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})

export class RecipeList{
  private recipeService = inject(RecipeService);

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipes()
            .pipe(tap(x => console.log(x)));
}
