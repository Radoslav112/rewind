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
  email = '';
  username = '';
  password = '';
  repeatPassword = '';
  @ViewChild('f') registerForm: NgForm | undefined;

  constructor(private registerService: RegisterService, private location: Location) { }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    console.log(this.registerForm);


    // try {
    //   this.checkPasswords(this.password, this.repeatPassword);
    //   this.registerService.register(this.email, this.username, this.password);
    //   alert('You are ready to login into your new account.');
    //   this.location.back();
    // } catch (error) {
    //   alert(error);
    // }
  }

  private checkPasswords(password: string, repeatPassword: string) {
    if (password !== repeatPassword) {
      throw new Error("Passwords does not match.");
    }
  }
}
