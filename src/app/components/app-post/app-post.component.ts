import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Post, postsState} from "../../static/posts.state";

@Component({
  selector: 'app-app-post',
  templateUrl: './app-post.component.html',
  styleUrls: ['./app-post.component.sass'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    JsonPipe,
    RouterModule,
  ]
})
export class AppPostComponent {
  post?: Post
  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe((params) => {
      const postId = params.get('postId')

      this.post = postsState.find((post) => post.id === Number(postId))
    })
  }
}
