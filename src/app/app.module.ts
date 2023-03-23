import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterService } from './services/register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipiesListComponent } from './recipies-list/recipes-list.component';
import { RecipeComponent } from './recipies-list/recipe/recipe.component';
import { RecipiesService } from './services/recipies.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthorizationGuard } from './services/authorization-guard';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeFilterPipe } from './recipies-list/recipe-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ErrorPageComponent,
    RecipiesListComponent,
    RecipeComponent,
    EditRecipeComponent,
    RecipeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService, 
    RecipiesService,
    AuthenticationService,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
