import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  email: string;
  subscription: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  user: User = {
    email: '',
    subscription: this.subscriptions[1],
    password: ''
  };
  submitted = false;

  onSubmit(): void {
    this.user.email = this.form.value.email;
    this.user.subscription = this.form.value.subscription;
    this.user.password = this.form.value.password;
    this.submitted = true;
  }
}
