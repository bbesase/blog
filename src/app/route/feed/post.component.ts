import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FeedService } from './feed.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postInfo: any;

  constructor(private _activatedRoute: ActivatedRoute, private _feedService: FeedService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      const allPosts = this._feedService.getPosts();

      allPosts.forEach((post: any) => {
        if (post.id == id) {
          this.postInfo = post;
        }
      })
    })
   }
}