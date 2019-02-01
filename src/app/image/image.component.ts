import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  template: `<img src={{src}} />`,
  styleUrls: [ './image.component.css' ]
})
export class ImageComponent  {
  @Input() src: string;
}
