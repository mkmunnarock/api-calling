import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
//import menual

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums;
  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.albums = this.photosService.getAlbums();
  }

}
