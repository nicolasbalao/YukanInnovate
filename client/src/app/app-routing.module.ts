import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectDetailsPageComponent } from './project-details-page/project-details-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  { path: '', component: ProjectPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'project/:projectId', component: ProjectDetailsPageComponent },
  { path: 'project/create', component: ProjectDetailsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
