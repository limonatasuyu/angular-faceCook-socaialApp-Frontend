import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostComponent } from './components/post/post.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostsComponent } from './component-groups/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePageComponent,
    PostComponent,
    NavComponent,
    ProfileCardComponent,
    HomePageComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
