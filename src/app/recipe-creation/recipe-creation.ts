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

@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-creation.html',
  styleUrls: ['./recipe-creation.css']
})
export class RecipeCreation implements OnInit {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      ingredients: [null],
      tags: [null],
      imageUrl: [null],
      cookingTime: [null, [Validators.required, Validators.min(1)]],
      yeild: [null],
      steps: [null],
      rating: [null, [Validators.min(0), Validators.max(5)]]
    });
  }

  // lets remove the validation for now
  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Recipe Data Submitted:', this.recipeForm.value);
      // To send to your API: this.yourService.createRecipe(this.recipeForm.value).subscribe();
    }
  }
}
