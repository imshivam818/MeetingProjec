import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  msg: string = '';
  form = true;
  messages = false;
  constructor(private apiService: ApiServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  // loginpage(){
  //   this.router.navigate(['/','login']);
  // }
  submitForm(){
    const data = {
      username: this.username,
      password: this.password,
    };
    console.log('user data for signin', data);
    this.apiService.login(data).subscribe(
      (response:any) => {
          this.msg = 'User signup successfully!';
          this.form = false;
          this.messages = true;
          this.router.navigate(['/','login']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
