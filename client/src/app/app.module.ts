import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsPageComponent } from './project-details-page/project-details-page.component';
import { ModifyProjectComponent } from './project-details-page/components/modify-project/modify-project.component'
import { CreateProjectComponent } from './project-details-page/components/create-project/create-project.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    LoginPageComponent,
    ProjectDetailsPageComponent,
    ModifyProjectComponent,
    CreateProjectComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
