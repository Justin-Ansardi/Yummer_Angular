import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Recipe } from './recipe';
import { form } from '@angular/forms/signals';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://localhost:7014/recipe'

  private filterRecipesSubject = new BehaviorSubject<Recipe>({} as Recipe);
          filterRecipesAction$ = this.filterRecipesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

    updateFilter(criteria: Recipe) {
    this.filterRecipesSubject.next(criteria);

  }

  saveRecipe(formValue: Recipe): void {
  // 1. Clean the payload: No wrapping, ensure numeric ID
  const payload = {
    ...formValue,
    // Convert to number; if null/empty, set to 0 (common for new DB records)
    id: Number(formValue.id) || 0 
  };

  console.log('Sending flat payload:', payload);

  this.http.post<Recipe>(this.apiUrl, payload).subscribe({
    next: (data) => {
      console.log('Breakpoint hit and saved!', data);
    },
    error: (err) => {
      // If it still fails, check this log for the specific validation error
      console.error('Validation Error Details:', err.error.errors);
    }
  });
}


  // saveRecipe(formValue: Recipe): void {
  //   console.log('save recipe hit: ' + formValue.title);
  //     // 1. Ensure ID is a number (use + to cast or || 0 for safety)
  //   const payload = {
  //     recipe: {
  //       ...formValue,
  //       id: +formValue.id || 0  // Forces id to be an integer
  //     }
  //   };
      
  //   // Adding .subscribe() triggers the actual HTTP request
  //   this.http.post<Recipe>(this.apiUrl, formValue).subscribe({
  //     next: (data) => console.log('Response from server:', data),
  //     error: (err) => console.error('HTTP Error:', err)
  //   });

  
}
