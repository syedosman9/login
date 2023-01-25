import { Component } from '@angular/core';
import { AuthserviceService } from 'projects/routing1/src/app/authservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private auth: AuthserviceService){}
  logout(){
    this.auth.logout();
  }
}
