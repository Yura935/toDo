import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserGuard } from './shared/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signUp' },
  { path: 'signUp', component: SignUpComponent },
  { path: 'main', component: MainComponent, canActivate: [UserGuard] },
  { path: '**', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
