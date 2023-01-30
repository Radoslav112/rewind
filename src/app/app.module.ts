import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterService } from './services/register.service';
import { UserRepository } from './repositories/user.repository';
import { FormsModule } from '@angular/forms';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';
import { RecipieComponent } from './recipie/recipie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ErrorPageComponent,
    RecipiesListComponent,
    RecipieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RegisterService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
