import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    console.log(this.route.snapshot.paramMap.get('id'));

    // user working on same page
    this.route.paramMap
            .subscribe( params => {
            const id =  +params.get('id')!;
            console.log(id);
            });

  }

    submit(){
      this.router.navigate(['followers/'], {
        queryParams: {pages: 1 , order: 'newest'}
      });
    }

}
