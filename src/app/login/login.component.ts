import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username = '';
  password = '';
  private loggedUserSubscription?: Subscription;
  private errorSubscription?: Subscription;

  constructor(private authenticationService: AuthenticationService, private location: Location) { }

  ngOnInit(): void {
    this.loggedUserSubscription = this.authenticationService.loggedUser$.subscribe({
      next: (user) => {
        if (!!user) {
          this.location.back();
        }
      }
    });

    this.errorSubscription = this.authenticationService.error$.subscribe((error: string) => {
      alert(error);
    })
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();
    this.errorSubscription?.unsubscribe();
  }

  onLoginClicked() {
    this.authenticationService.login(this.username, this.password);
  }

}
