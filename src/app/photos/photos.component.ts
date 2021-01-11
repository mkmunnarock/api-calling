import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
//import menual
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
 
photos;
albumId;
  constructor(
    private photosService: PhotosService,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.albumId = this.router.snapshot.params.albumId;
 this.photos = this.photosService.getPhotos(this.albumId);
  }

}
