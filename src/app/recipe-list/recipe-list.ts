import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes/recipe-service';
import { Recipe } from '../recipes/recipe';
import { Observable, tap, combineLatest, map  } from 'rxjs';
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

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipes()
            .pipe(tap(x => console.log(x))); // debugging

  constructor(private service: RecipeService, private fb: FormBuilder){}
}
