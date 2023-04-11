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
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, createFeature } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RecipeListEffects } from './recipies-list/store/recipe-list.effects';
import * as RecipeListReducer from './recipies-list/store/recipe-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

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
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ recipes: RecipeListReducer.recipeListReducer }),
    EffectsModule.forRoot([RecipeListEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
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
