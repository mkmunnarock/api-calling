import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { Covid19Component } from './covid19/covid19.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
   { path: '', component: AlbumComponent},
   { path: 'photos/:albumId', component: PhotosComponent},
   {path: 'comments', component: CommentComponent},
   {path: 'covid19', component: Covid19Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
