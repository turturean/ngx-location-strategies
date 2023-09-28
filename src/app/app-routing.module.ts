import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NgxLocationStrategiesModule
} from "../../projects/ngx-location-strategies/src/lib/ngx-location-strategies.module";
import {AppPostsComponent} from "./components/app-posts/app-posts.component";
import {AppPostComponent} from "./components/app-post/app-post.component";

const routes: Routes = [
  {
    path: "posts",
    component: AppPostsComponent
  },
  {
    path: "post/:postId",
    component: AppPostComponent
  },
  {
    path: "**",
    redirectTo: "posts"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxLocationStrategiesModule.forRoot({ routeQueryName: "my-app" })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
