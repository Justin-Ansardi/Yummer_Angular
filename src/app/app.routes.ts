import { Routes } from '@angular/router';
import { RecipeCreation } from './recipe-creation/recipe-creation';
import { RecipeList } from './recipe-list/recipe-list';

export const routes: Routes = [ 
    {path: 'app-recipe-creation', component: RecipeCreation},
    {path: 'app-recipe-list', component: RecipeList}
];
