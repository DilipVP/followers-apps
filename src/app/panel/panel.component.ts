import { Component, OnInit } from '@angular/core';
import { CoursesComponent } from '../courses.component';
import { CoursesService } from '../courses.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  constructor(service: EmailService) {
    this.courses = service.Authors;
   }

  courses;

  index: any;

  ngOnInit(): void {
  }
  onAdd(){
    this.index = this.courses.length + 1;
    this.courses.push({id: this.index, name: 'course' + this.index});
  }

  onRemove(course: any){
     const index =  this.courses.indexOf(course);
     this.courses.splice(index, 1);
  }

  onChange(course: any){
    const index =  this.courses.indexOf(course);
    this.courses[index].name = 'Modified';
  }

}
