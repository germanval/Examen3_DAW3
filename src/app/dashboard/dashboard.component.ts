import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router,private route:ActivatedRoute){
      
  }
 
 
 ipostlocation():void{
  this.router.navigate(["post"],{relativeTo:this.route})
 }
 irposttodos():void{
  this.router.navigate(["post/:id"],{relativeTo:this.route})
 }
}
