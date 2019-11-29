import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule, HttpHeadersModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';


const routes: Routes = [
	{path: '', pathMatch:'full', redirectTo:'movies'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  export: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
