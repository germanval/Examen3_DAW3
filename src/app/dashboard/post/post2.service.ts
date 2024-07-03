import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post2 } from './post2';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Post2Service {

  
  constructor(private httpCliente:HttpClient) { }
  getallPosts2(): Observable<Post2[]> {
    return this.httpCliente.get<Post2[]>("https://jsonplaceholder.typicode.com/todos").pipe(
      map(posts => posts.filter(post => post.id >= 25 && post.id <= 90 && post.completed))
    );
  }
  getPostById2(id:number):Observable<Post2>{  
    return this.httpCliente.get<Post2>("https://jsonplaceholder.typicode.com/todos/"+id);
  }
}