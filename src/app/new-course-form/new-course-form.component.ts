import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  categories = [
    {id: 1, courseName: 'Development'},
    {id: 2, courseName: 'Arts'},
    {id: 3, courseName: 'Teaching'},
  ];

  constructor() { }

  submit(course: any){

    console.log(course);

  }

  ngOnInit(): void {
  }

}
