import { Injectable } from '@angular/core';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  Authors;
  constructor(service: CoursesService) {
    this.Authors = service.getCourses();

  }


}
