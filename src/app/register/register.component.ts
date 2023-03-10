import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Location } from "@angular/common";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm | undefined;

  constructor(private registerService: RegisterService, private location: Location) { }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    try {
      this.checkPasswords(this.registerForm?.value.usernamepassword, this.registerForm?.value.usernamerepeatPassword);
      this.registerService.register(this.registerForm?.value.usernameemail, this.registerForm?.value.usernameusername, this.registerForm?.value.usernamepassword);
      alert('You are ready to login into your new account.');
      this.location.back();
    } catch (error) {
      alert(error);
    }
  }

  private checkPasswords(password: string, repeatPassword: string) {
    if (password !== repeatPassword) {
      throw new Error("Passwords does not match.");
    }
  }
}
