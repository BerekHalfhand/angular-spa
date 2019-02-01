import { Component, OnInit } from '@angular/core';
import { ImageService } from './image/image.service';
import { Image } from '../image';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  images: Image[];
  start: number;
  limit: number;
  isOver: boolean;

  constructor(private imageService: ImageService) {
    this.start = 0;   //set it to 4980 to see the button disappear after the second click
    this.limit = 9;
    this.isOver = false;
  }

  ngOnInit() {
    this
      .imageService
      .getImages(this.start, this.limit)
      .subscribe((data: Image[]) => {
        this.images = data;
        this.start += this.limit;
    });
  }

  loadMore() {
    let initialLength = this.images.length;
    
    this
      .imageService
      .getImages(this.start, this.limit)
      .subscribe((data: Image[]) => {
        this.images = this.images.concat(data);
        this.start += this.limit;
        //if there are fewer images than expected, assume it to be the end of the collection
        this.isOver = (initialLength+this.limit) > this.images.length;
    });
  }
}
