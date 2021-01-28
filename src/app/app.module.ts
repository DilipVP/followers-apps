import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { ClicourseComponent } from './clicourse/clicourse.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipeService } from './summary.pipe.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewArrayBuilderFormComponent } from './new-array-builder-form/new-array-builder-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from './services/post.service';
import { HttpErrorHandler } from './common/global-error-handler';
import { AppError } from './common/app-error';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ClicourseComponent,
    SummaryPipeService,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    NewArrayBuilderFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'archive/:year/:month',
        component: ArchiveComponent
    },
    {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
    },
    {
        path: 'followers',
        component: GithubFollowersComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
], {
    initialNavigation: 'enabled'
})
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandler, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
