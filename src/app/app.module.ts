import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterService } from './services/register.service';
import { FormsModule } from '@angular/forms';
import { RecipiesListComponent } from './recipies-list/recipes-list.component';
import { RecipeComponent } from './recipies-list/recipe/recipe.component';
import { RecipiesService } from './services/recipies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ErrorPageComponent,
    RecipiesListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RegisterService, 
    RecipiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
