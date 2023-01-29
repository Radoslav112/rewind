import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  username = '';
  password = '';
  repeatPassword = '';

  constructor(private registerService: RegisterService, private location: Location) { }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    try {
      this.registerService.register(this.email,this.username,this.password,this.repeatPassword);
      alert('You are ready to login into your new account.');
      this.location.back();
    } catch (error) {
      alert(error);
    }
  }
}
