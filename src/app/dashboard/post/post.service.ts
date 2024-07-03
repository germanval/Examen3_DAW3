import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpCliente:HttpClient){}

  getlocaciones(): Observable<Post[]> {
    return this.httpCliente.get<{ info: any, results: Post[] }>("https://rickandmortyapi.com/api/location").pipe(
      map(response => response.results.filter(location => location.type === 'Planet'))
    );
  }
}
