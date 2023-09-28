import { Component } from '@angular/core';
import {postsState} from "../../static/posts.state";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ]
})
export class AppPostsComponent {
  readonly posts = postsState
}
