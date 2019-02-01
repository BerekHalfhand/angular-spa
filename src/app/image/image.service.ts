import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {  }

  getImages(start: number = 0, limit: number = 9) {
    console.log('getImages', start, limit)
    let path: string = `https://jsonplaceholder.typicode.com/photos?`
    if (start) path += `_start=${start}&`
    if (limit) path += `_limit=${limit}`

    return this.http.get(path);
  }
}