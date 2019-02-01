import { Component, OnInit } from '@angular/core';
import { ImageService } from './image/image.service';
import { Image } from '../image';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  start:  number  = 0; //set it to 4980 to see the button disappear after the second click
  limit:  number  = 9;
  isOver: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    let initialLength = this.images.length;

    // limit validation alone isn't worth a separate directive at this point, so
    if (!this.limit || this.limit < 0 || this.limit > 50)
      this.limit = 9;

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
