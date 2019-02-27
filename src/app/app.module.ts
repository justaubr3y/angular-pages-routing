import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue/vue.component';

const routes = [
  {path: '', component: AngularComponent},
  {path: 'react', component: ReactComponent},
  {path: 'vue', component: VueComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, AngularComponent, ReactComponent, VueComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
