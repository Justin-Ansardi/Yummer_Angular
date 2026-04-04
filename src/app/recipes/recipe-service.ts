import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Recipe } from './recipe';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://localhost:7014/recipe'

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {

    return this.http.get<Recipe[]>(this.apiUrl);
  }
}
