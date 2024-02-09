import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './contents/main-dashboard/main-dashboard.component';
import { AioKejayanComponent } from './contents/industry-plant/aio-kejayan/aio-kejayan.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'aio-kejayan', component: AioKejayanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
