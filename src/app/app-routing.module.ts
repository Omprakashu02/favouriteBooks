import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { FavroiteBooksComponent } from './components/main-components/favroite-books/favroite-books.component';
import { AuthGuard } from './components/shared/guard/auth.guard';
import { DashboardComponent } from './components/main-components/dashboard/dashboard.component';

const routes: Routes = [

  {
    path:'' , redirectTo:'login', pathMatch: "full",
  },
  {
    path:"login" , component:LoginComponent
  },
  {
    path:"favroite-books" ,canActivate: [AuthGuard],component:FavroiteBooksComponent
  },
  {
    path:"dashboard" ,canActivate: [AuthGuard],component:DashboardComponent
  },
  {
    path: '**' , redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
