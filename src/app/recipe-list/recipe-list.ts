import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes/recipe-service';
import { Recipe } from '../recipes/recipe';
import { Observable, tap, combineLatest, map, filter  } from 'rxjs';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
//import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports:  [CommonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    // DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule
  ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})

export class RecipeList{
  private recipeService = inject(RecipeService);

  constructor(private service: RecipeService, private fb: FormBuilder){}

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipes();

  filterRecipesAction$ = this.recipeService.filterRecipesAction$;

     // Helper Functions
    filterRecipesByFormInput = (recipes: Recipe[] , filter: Recipe): Recipe[] => {
       const filterTitle = filter?.title?.toLowerCase() ?? '';
       return recipes.filter(recipe => recipe.title?.toLowerCase()
                                                               .includes(filterTitle)) 
     };
     //End Helper Functions

    filteredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$])
              .pipe(
                map(([recipes, filter]: [Recipe[], Recipe]) => 
                   this.filterRecipesByFormInput(recipes,filter)
                ));
    }

 
    
    

