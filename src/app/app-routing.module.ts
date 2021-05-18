import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

const usersModule = () => import('./user/user.module').then(x => x.UserModule)

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', loadChildren: usersModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
