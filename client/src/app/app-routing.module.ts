import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { IsAuthenticateGuard } from './isAuthenticated.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectDetailsPageComponent } from './project-details-page/project-details-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  { path: '', component: ProjectPageComponent, canActivate: [IsAuthenticateGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'project/:projectId', component: ProjectDetailsPageComponent, canActivate: [IsAuthenticateGuard] },
  { path: 'project/create', component: ProjectDetailsPageComponent, canActivate: [IsAuthenticateGuard] },
  { path: 'admin', component: AdminPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
