import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { FavoriteEventChangedArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-clicourse',
  templateUrl: './clicourse.component.html',
  styleUrls: ['./clicourse.component.css']
})
export class ClicourseComponent implements OnInit {
  constructor(service: EmailService) {
    this.Authors = service.Authors;
   }

  isActive = true;
  Title = 'This shows Author';
  colSpan = 2;

  Authors;

// Event Filtering
email = 'me@gmail.com';

course = {
  Title: 'Angular',
  rating: 4.5848,
  students: 30254,
  price: 190.25,
  releaseDate : new Date(2016, 3, 1)
};

text = 'D:\Java Full Stack\Angular\angulardemo>ng g c PipeExample CREATE src/app/pipe-example/pipe-example.component.html (27 bytes) CREATE src/app/pipe-example/pipe-example.component.spec.ts (662 bytes) CREATE src/app/pipe-example/pipe-example.component.ts (298 bytes) CREATE src/app/pipe-example/pipe-example.component.css (0 bytes) UPDATE src/app/app.module.ts (806 bytes)';

  titlestring = '';

  post = {
    title: 'Title',
    isFavorite: false,
    likesCount: 0
  };

// Event Binding

onDivClicked(){
  console.log('Div was clicked');
}

onSave($event: any){
  $event.stopPropagation();
  console.log('Button was clicked', $event);
}
onKeyUp(){
  console.log(this.email);
}
  ngOnInit(): void {
  }

  onFavoriteChanged(eventArgs: FavoriteEventChangedArgs){
    console.log('Favorite Changed:', eventArgs);
  }

}
