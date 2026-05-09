import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipeService } from '../recipes/recipe-service';
import { Recipe } from '../recipes/recipe';

@Component({
  selector: 'app-recipe-filter',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-filter.html',
  styleUrl: './recipe-filter.css'
})
export class RecipeFilterComponent {  
    private fb = inject(FormBuilder); 

  recipeForm = this.fb.group<Recipe>({
    title: '',
    ingredients: '',
tags: '',
    cookingTime: 0,
    id: 0
  });


  constructor(private service: RecipeService) {}

  filterResults() {
    this.service.updateFilter(<Recipe>this.recipeForm.value);
  }

  clearFilters() {
    this.recipeForm.reset();
  }
}

