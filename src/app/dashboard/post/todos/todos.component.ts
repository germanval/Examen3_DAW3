import { Component } from '@angular/core';
import { Post2Service } from '../post2.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post2 } from '../post2';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  displayedColumns: string[] = ['Id', 'userId', 'title', 'completed'];

  posts: Post2[] = []
  constructor(private post2Service:Post2Service,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.post2Service.getallPosts2().subscribe((data)=>{
      console.log(data);
      this.posts=data;
    })
    
  }

}
