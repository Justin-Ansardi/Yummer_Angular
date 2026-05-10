// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recipe-creation',
//   imports: [],
//   templateUrl: './recipe-creation.html',
//   styleUrl: './recipe-creation.css',
// })
// export class RecipeCreation {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes/recipe-service';
import { Recipe } from '../recipes/recipe';
 
@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-creation.html',
  styleUrls: ['./recipe-creation.css']
})
export class RecipeCreation implements OnInit {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private service:RecipeService) {}

  //Imperative pattern
  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      id: [0],
      title: ['', ],
      ingredients: [null],
      tags: [null],
      imageUrl: [null],
      cookingTime: [0],
      yeild: [null],
      steps: [null],
      rating: [null]
    })
    // this.recipeForm.valueChanges.subscribe(
    //   formValue => {
    //     this.service.saveRecipe(formValue as Recipe);
    //   }
      
   // )
    ;
  }

  // lets remove the validation for now
  onSubmit(): void {
      console.log('Recipe Data Submitted:', this.recipeForm.value);
      this.service.saveRecipe(this.recipeForm.value);
      
  }
}
