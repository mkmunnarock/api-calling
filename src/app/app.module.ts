import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
// importing menual
import { HttpClientModule } from "@angular/common/http";
import { PhotosComponent } from './photos/photos.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { Covid19Component } from './covid19/covid19.component';
//import self search
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from '@angular/forms';
// ending search import

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PhotosComponent,
    CommentComponent,
    NavbarComponent,
    Covid19Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
