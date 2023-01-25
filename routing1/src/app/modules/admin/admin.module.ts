import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ResourcesComponent } from './component/resources/resources.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
