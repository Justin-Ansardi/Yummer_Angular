import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Recipe } from './recipe';


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

   saveRecipe(formValue: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.apiUrl, formValue);
  }
}
