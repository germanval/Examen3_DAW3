import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpCliente:HttpClient) { }
  getallPosts():Observable<Post[]>{
    return this.httpCliente.get<Post[]>("https://rickandmortyapi.com/api/location"); 
  }
  getPostById(id:number):Observable<Post>{  
    return this.httpCliente.get<Post>("https://rickandmortyapi.com/api/location/"+id);
  }
}
