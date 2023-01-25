import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { ResourcesComponent } from './component/resources/resources.component';

const routes: Routes = [
    {path:'',component:MainComponent,
    children:[{path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'resource',component:ResourcesComponent},
    { path:'',redirectTo:'admin/home',pathMatch:'full' }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
