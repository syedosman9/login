import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email : new FormControl(''),
    password:new FormControl('')
  });

  constructor(private auth:AuthserviceService,private router:Router){}

  ngOnInit(){
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(['admin'])
        },
        (err:Error)=>{
          alert(err.message);
        }
      )
    }
  }

}
