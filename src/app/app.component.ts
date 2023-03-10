import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'rewind';
  private loggedUserSubscription?: Subscription;
  user?: User | null; 

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.loggedUser$.subscribe({
      next: (user) => {
        this.user = user;
      } 
    })
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();
  }

  public onLogoutClicked() {
    this.authenticationService.logout();
  }
}
