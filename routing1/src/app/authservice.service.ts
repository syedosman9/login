import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private route:Router) { }


  isLoggedIn():any{
    return localStorage.getItem('token') !
  }

  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string | null{
    return localStorage.getItem('token')

  }

  login({email,password}:any):Observable<any>{
    if((email === 'admin@gmail.com') && (password === 'Admin123')){
      this.setToken('asdfjl');
      return of({name:'Syed Osman',email:'admin@gamil.com'})
    }
    return throwError(new Error("Failed to login"));
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
