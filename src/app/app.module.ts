import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


// used to create fake backend
import { fakeBackendProvider } from 'src/app/_helpers/fake-backend';


import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from 'src/app/interceptor.interceptor';
import { AuthService } from 'src/app/auth.service';

import { HomeComponent } from './home/home.component';
import { AlertComponent } from './component/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
    // provider used to create fake backend
    fakeBackendProvider  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
