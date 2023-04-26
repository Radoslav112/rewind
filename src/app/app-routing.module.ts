import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipies-list/recipe/recipe.component';
import { RecipiesListComponent } from './recipies-list/recipes-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthorizationGuard } from './services/authorization-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipiesListComponent, canActivateChild: [AuthorizationGuard] , children:[
    { path: ':id', component: RecipeComponent},
    { path: 'edit/:id', component: EditRecipeComponent},
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page-not-found', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
