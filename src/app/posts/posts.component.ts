import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

class Variables{
  readonly prevval: any;
  constructor(variabs: any){ this.prevval = variabs; }
}
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {



  constructor(private service: PostService) {

  }

  posts: any;



  @Input('title') title: any;
  clicked: boolean | undefined;
  focus: boolean | undefined;
  enteredid = '';
  postforid: any;
  errormsg: any;

  ngOnInit(): void {

    this.service.getAll()
      .subscribe(
        (data) => {
       this.posts = data;
          },
          (this.errorHandler));

  }

  clickedOut(){
    this.focus = false;
  }
  clickedIn(){
    this.errormsg = null;
    this.focus = true;
  }

  getPost(id: HTMLInputElement){

    this.clicked = true;
    this.enteredid = id.value;
    console.log(this.enteredid);

    this.service.getResource(id.value)
    .subscribe(
      (data) => {
        this.postforid = data;
        },
    (this.errorHandler));
  }

  createPost(input: HTMLInputElement){
    let post: any = {title : input.value};
    input.value = '';

    this.service.create(post)
        .subscribe(data => {
         post = data;

         this.posts.splice(0, 0, post);
         console.log(this.posts.indexOf(post));
        },
      (this.errorHandler));
  }

  updatePost(post: any){

    const params = {title: 'modified'};
    const index = this.posts.indexOf(post);
    const vb = new Variables(this.posts[index].title);
    this.posts[index].title = params.title;

    this.service.update(post, params)
        .subscribe(data => null,
        (error: HttpErrorResponse) => {
          this.posts[index].title = vb.prevval;
          this.errorHandler(error);
        }

        );
  }

  deletePost(post: any){
        this.service.delete(post.id)
           .subscribe(
             data => {
            const index = this.posts.indexOf(post);
            this.posts.splice(index , 1);
                 },
            (this.errorHandler));
    }

    private errorHandler(error: any){

      switch (true){

        case error instanceof NotFoundError : {
            console.log(error.originalError?.status);
            alert('There is no data in the URL:' + error.originalError?.url );
            break;
          }

       case error instanceof BadInput : {
           // this.form.setErrors(err.message);
           console.log(error);
           break;
       }

       default: {
        throwError(error);
       }
      }
    }

}
