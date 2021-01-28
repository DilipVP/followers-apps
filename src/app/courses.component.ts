import {Component} from '@angular/core';
import { CoursesService } from './courses.service';


@Component({

    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course.name}}
            </li>
        </ul>
    `
})
export class CoursesComponent{

    title = 'List of courses';
   // courses = ["course1", "course2", "course3"];
    courses;

    constructor(service: CoursesService){

        this.courses = service.getCourses();

    }

}
