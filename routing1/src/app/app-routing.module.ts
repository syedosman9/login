import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'admin',canActivate:[AuthGuard],
  loadChildren:()=>import('./modules/admin/admin.module').then(m => m.AdminModule),
    },
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
