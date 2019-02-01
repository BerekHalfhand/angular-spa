import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  template: `<a href={{src}}><img src={{thumbnail}} /></a>`,
  styleUrls: [ './image.component.css' ]
})
export class ImageComponent  {
  @Input() src: string;
  @Input() thumbnail: string;
}
