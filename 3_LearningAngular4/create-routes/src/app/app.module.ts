import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Added all the components that CLI created
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

// Declaration: make directives from the curent module available to other directives in the current module. 
// Imports makes exported declarations of other modules available in current module
// Providers make services and values known to DI, inject services required by components, directives, pipes in our module

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', children: [
    { path: 'list', component: UserListComponent, children: [
      {path: 'detail/:name', component: UserComponent}
    ] }
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
