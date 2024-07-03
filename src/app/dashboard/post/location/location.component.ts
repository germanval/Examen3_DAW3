import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { PostService } from '../post.service';
import { Post } from '../post';



@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  displayedColumns: string[] = ['Id', 'name', 'type', 'dimension','residents','url','created'];
  locaciones: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getlocaciones().subscribe((data: Post[]) => {
      console.log('Locations with type "Planet":', data);
      this.locaciones = data;
    });
  }
}
