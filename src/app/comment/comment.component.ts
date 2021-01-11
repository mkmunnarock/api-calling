import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-comment',
  templateUrl:'./comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  data;

// name = data.search("W3Schools");
// name = data.name
  constructor(
    private comment: PhotosService
  ) {
    this.getDataFromAPI();
  }

  ngOnInit(): void {
  }
   
  public getDataFromAPI()
  {
  this.comment.getComments().subscribe(
    (res) => {
      this.data = res;
      console.log(this.data);
    },
    (err) => {
      console.log(err);
    }
);
  }
}
